import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MainChart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch(
      "http://management.runasp.net/api/v1/dashboard/sales-analytics-charts/sales-trend",
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (!isMounted)
    return (
      <div className="h-80 w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse" />
    );

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 mb-8 transition-colors">
      <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">
        Sales Analytics
      </h3>
      <div className="w-full h-80 min-h-[320px]">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center text-slate-400 animate-pulse">
            Loading...
          </div>
        ) : data.length > 0 ? (
          <ResponsiveContainer width="100%" aspect={3}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                dy={10}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#4f46e5"
                strokeWidth={3}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-rose-500">
            No data available
          </div>
        )}
      </div>
    </div>
  );
}
