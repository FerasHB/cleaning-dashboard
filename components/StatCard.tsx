type StatCardProps = {
  label: string;
  value: number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{value}</h2>
    </div>
  );
}
