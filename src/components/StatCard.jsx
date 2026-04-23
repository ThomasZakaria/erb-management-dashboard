export default function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
      <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">
        {title}
      </span>
      <h2 className="text-2xl font-bold mt-2 text-slate-800 dark:text-white">
        {value}
      </h2>
    </div>
  );
}
