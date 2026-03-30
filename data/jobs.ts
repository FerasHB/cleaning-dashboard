export type JobStatus = "Offen" | "In Arbeit" | "Erledigt";

export type CleaningJob = {
  id: number;
  customerName: string;
  location: string;
  time: string;
  service: string;
  status: JobStatus;
  employee: string;
};

export const jobs: CleaningJob[] = [
  {
    id: 1,
    customerName: "Praxis Dr. Weber",
    location: "Lüdenscheid",
    time: "09:00",
    service: "Praxisreinigung",
    status: "In Arbeit",
    employee: "Ali",
  },
  {
    id: 2,
    customerName: "Büro Schneider",
    location: "Dortmund",
    time: "11:30",
    service: "Büroreinigung",
    status: "Offen",
    employee: "Mona",
  },
  {
    id: 3,
    customerName: "Fitness Studio Move",
    location: "Hagen",
    time: "14:00",
    service: "Unterhaltsreinigung",
    status: "Erledigt",
    employee: "Sara",
  },
];