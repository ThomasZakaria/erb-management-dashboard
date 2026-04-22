import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
];

export default function MainChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-8 h-[350px]">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Revenue Flow</h3>
      

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
          <YAxis hide={true} />
          <Tooltip />

          <Area type="monotone" dataKey="sales" stroke="#6366f1" fillOpacity={0.1} fill="#6366f1" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}