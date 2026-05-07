import { useState, useEffect } from "react";
import { apiRequest } from "../utils/api";

export default function StockTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiRequest("/api/v1/inventory/GetInventoryProducts/products")
      .then((data) => {
        if (data) {
          setProducts(data.products || data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {!loading &&
              Array.isArray(products) &&
              products.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20"
                >
                  <td className="px-6 py-4 dark:text-white">{p.productName}</td>
                  <td className="px-6 py-4 dark:text-slate-300">
                    {p.warehouseName}
                  </td>
                  <td className="px-6 py-4 font-bold dark:text-white">
                    {p.availableStock}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
