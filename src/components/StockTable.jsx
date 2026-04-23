import {
  Search,
  ChevronDown,
  Download,
  Plus,
  Minus,
  ArrowRightLeft,
} from "lucide-react";

const stockData = [
  {
    id: 1,
    product: "iPhone 15 Pro",
    warehouse: "All Warehouses",
    current: 150,
    reserved: 10,
    available: 140,
    status: "In Stock",
    lastUpdate: "2 Hours ago",
  },
  {
    id: 2,
    product: "Samsung S23",
    warehouse: "All Warehouses",
    current: 600,
    reserved: 0,
    available: 600,
    status: "Over of Stock",
    lastUpdate: "1 Day ago",
  },
  {
    id: 3,
    product: "AirPods Pro",
    warehouse: "All Warehouses",
    current: 0,
    reserved: 2,
    available: 0,
    status: "Out of Stock",
    lastUpdate: "1 week ago",
  },
  {
    id: 4,
    product: "HP Victus Laptop",
    warehouse: "All Warehouses",
    current: 75,
    reserved: 0,
    available: 75,
    status: "Low Stock",
    lastUpdate: "1 Months ago",
  },
  {
    id: 5,
    product: "Bose Headphones",
    warehouse: "All Warehouses",
    current: 100,
    reserved: 4,
    available: 96,
    status: "In Stock",
    lastUpdate: "2 Hours ago",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "In Stock":
      return "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400";
    case "Over of Stock":
      return "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400";
    case "Out of Stock":
      return "bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400";
    case "Low Stock":
      return "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function StockTable() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Stock Management
        </h3>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer">
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="relative">
          <select className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-10 py-2 text-sm text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer">
            <option>All Warehouses</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-10 py-2 text-sm text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer">
            <option>All Status</option>
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-slate-50/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Warehouse</th>
              <th className="px-6 py-4">Current Stock</th>
              <th className="px-6 py-4">Reserved</th>
              <th className="px-6 py-4">Available</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Update</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-600 dark:text-slate-300 divide-y divide-slate-100 dark:divide-slate-700">
            {stockData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-slate-800 dark:text-white">
                  {item.product}
                </td>
                <td className="px-6 py-4">{item.warehouse}</td>
                <td className="px-6 py-4 font-semibold">{item.current}</td>
                <td className="px-6 py-4">{item.reserved}</td>
                <td className="px-6 py-4 font-semibold text-slate-800 dark:text-white">
                  {item.available}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusStyles(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-slate-400">
                  {item.lastUpdate}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer">
                      <Plus size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer">
                      <Minus size={16} />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer">
                      <ArrowRightLeft size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
