export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <span className="text-slate-400 text-sm font-medium">{title}</span>
      <h2 className="text-2xl font-bold mt-2 text-slate-800">{value}</h2>
    </div>
  );
}
