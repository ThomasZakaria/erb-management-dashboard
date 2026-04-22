// src/App.jsx
import Sidebar from "./layout/Sidebar";
import StatCard from "./components/StatCard";
import MainChart from "./components/MainChart";
import TransactionTable from "./components/TransactionTable";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      {/* زودنا ml-64 (Margin Left) عشان نسيب مساحة للـ Sidebar الثابت */}
      <main className="flex-1 p-10 ml-64">
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-slate-800">
            Dashboard Overview
          </h1>
          <p className="text-slate-500">Welcome back, Thomas!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Balance" value="$24,500" />
          <StatCard title="Total Earnings" value="$12,200" />
          <StatCard title="Active Projects" value="12" />
        </div>

        <MainChart />
        <TransactionTable />
      </main>
    </div>
  );
}

export default App;
