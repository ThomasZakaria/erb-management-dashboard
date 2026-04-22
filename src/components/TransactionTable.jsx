const transactions = [
  {
    id: "#1254",
    customer: "Yahia Mostafa",
    date: "2026-04-20",
    amount: "$450.00",
    status: "Completed",
  },
  {
    id: "#1255",
    customer: "John Ashrof",
    date: "2026-04-21",
    amount: "$1,200.00",
    status: "Pending",
  },
  {
    id: "#1256",
    customer: "Thomas Zakaria",
    date: "2026-04-22",
    amount: "$80.00",
    status: "Completed",
  },
];

export default function TransactionTable() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8">
      <h3 className="text-lg font-bold mb-4 text-slate-800">
        Recent Transactions
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-sm border-b border-slate-50">
              <th className="pb-4 font-medium">Order ID</th>
              <th className="pb-4 font-medium">Customer</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-slate-600 text-sm">
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-slate-50 last:border-0">
                <td className="py-4">{t.id}</td>
                <td className="py-4 font-medium text-slate-800">
                  {t.customer}
                </td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${t.status === "Completed" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="py-4 text-right font-semibold text-slate-800">
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
