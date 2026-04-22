// src/layout/Sidebar.jsx
import { LayoutDashboard, Wallet, Settings } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Wallet, label: "Payments" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-[#1E1E2D] text-white p-5 border-r border-white/5">
      <h1 className="text-2xl font-bold mb-10 px-3">ERB System</h1>

      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl cursor-pointer mb-2 transition-all duration-200 group"
          >
            <item.icon
              size={20}
              className="group-hover:text-indigo-400 transition-colors"
            />
            <span className="font-medium">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
