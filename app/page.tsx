"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";
import StatCard from "@/components/StatCard";
import { jobs as initialJobs } from "@/data/jobs";
import type { CleaningJob } from "@/data/jobs";

type FilterStatus = "Alle" | "Offen" | "In Arbeit" | "Erledigt";

const filters: FilterStatus[] = ["Alle", "Offen", "In Arbeit", "Erledigt"];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>("Alle");
  const [jobs, setJobs] = useState<CleaningJob[]>(initialJobs);

  const totalJobs = jobs.length;
  const openJobs = jobs.filter((job) => job.status === "Offen").length;
  const inProgressJobs = jobs.filter(
    (job) => job.status === "In Arbeit",
  ).length;
  const completedJobs = jobs.filter((job) => job.status === "Erledigt").length;

  const handleStartJob = (id: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: "In Arbeit" } : job,
      ),
    );
  };

  const handleCompleteJob = (id: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, status: "Erledigt" } : job,
      ),
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.customerName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      selectedStatus === "Alle" || job.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-gray-950 p-4 text-white">
      <div className="mx-auto max-w-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Cleaning Dashboard</h1>
          <p className="text-sm text-gray-400">Heute</p>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <StatCard label="Heute" value={totalJobs} />
          <StatCard label="Offen" value={openJobs} />
          <StatCard label="In Arbeit" value={inProgressJobs} />
          <StatCard label="Erledigt" value={completedJobs} />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Kunde suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
          />
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => {
            const isActive = selectedStatus === filter;

            return (
              <button
                key={filter}
                onClick={() => setSelectedStatus(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white text-black"
                    : "border border-gray-800 bg-gray-900 text-gray-300"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              customerName={job.customerName}
              location={job.location}
              time={job.time}
              service={job.service}
              status={job.status}
              employee={job.employee}
              onStart={() => handleStartJob(job.id)}
              onComplete={() => handleCompleteJob(job.id)}
            />
          ))}

          {filteredJobs.length === 0 && (
            <div className="mt-4 rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-4 text-center text-sm text-gray-500">
              Keine Aufträge gefunden
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
