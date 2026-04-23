import {
  Package,
  Banknote,
  TrendingDown,
  XCircle,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Total Stock Quantity",
    value: "203",
    icon: Package,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Total Stock Value",
    value: "23,551,145",
    icon: Banknote,
    color: "text-emerald-500 dark:text-emerald-400",
  },
  {
    id: 3,
    title: "Low Stock Items",
    value: "12",
    icon: TrendingDown,
    color: "text-amber-500 dark:text-amber-400",
  },
  {
    id: 4,
    title: "Out of Stock Items",
    value: "5",
    icon: XCircle,
    color: "text-rose-500 dark:text-rose-400",
  },
  {
    id: 5,
    title: "Damaged / Expired",
    value: "1",
    icon: AlertTriangle,
    color: "text-slate-400 dark:text-slate-500",
  },
];

export default function StockStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors flex flex-col justify-center"
        >
          <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-3">
            {stat.title}
          </span>
          <div className="flex items-center gap-2">
            <stat.icon size={18} className={stat.color} />
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {stat.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
