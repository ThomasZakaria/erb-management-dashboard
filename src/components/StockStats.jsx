import { useState, useEffect } from "react";
import {
  Package,
  Banknote,
  TrendingDown,
  Star,
  ShoppingCart,
} from "lucide-react";

export default function StockStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE =
    "http://management.runasp.net/api/v1/dashboard/overview-kpis";

  useEffect(() => {
    const endpoints = [
      {
        id: 1,
        title: "Total Sales",
        url: `${API_BASE}/total-sales`,
        icon: Banknote,
        color: "text-emerald-500",
      },
      {
        id: 2,
        title: "Net Profit",
        url: `${API_BASE}/net-profit`,
        icon: Package,
        color: "text-blue-600",
      },
      {
        id: 3,
        title: "Stock Turnover",
        url: `${API_BASE}/stock-turnover-rate`,
        icon: TrendingDown,
        color: "text-amber-500",
      },
      {
        id: 4,
        title: "Satisfaction",
        url: `${API_BASE}/customer-satisfaction`,
        icon: Star,
        color: "text-purple-500",
      },
      {
        id: 5,
        title: "Avg Order Value",
        url: `${API_BASE}/average-order-value`,
        icon: ShoppingCart,
        color: "text-rose-500",
      },
    ];

    Promise.all(endpoints.map((e) => fetch(e.url).then((res) => res.json())))
      .then((results) => {
        const mergedData = endpoints.map((e, i) => ({
          ...e,
          value: results[i]?.value || results[i] || "0",
        }));
        setStats(mergedData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="h-24 flex items-center justify-center">...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((s) => (
        <div
          key={s.id}
          className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700"
        >
          <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-3 block">
            {s.title}
          </span>
          <div className="flex items-center gap-2">
            <s.icon size={18} className={s.color} />
            <h2 className="text-xl font-bold text-slate-800 dark:text-white truncate">
              {s.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
