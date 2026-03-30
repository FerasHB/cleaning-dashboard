import type { JobStatus } from "@/data/jobs";

type StatusBadgeProps = {
  status: JobStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    Offen: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20",
    "In Arbeit": "bg-blue-500/15 text-blue-300 border border-blue-500/20",
    Erledigt: "bg-green-500/15 text-green-300 border border-green-500/20",
  };

  return (
    <span className={`rounded-full px-2 py-1 text-xs ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
