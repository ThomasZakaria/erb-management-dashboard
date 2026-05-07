import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://management.runasp.net/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server connection failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 dark:border-slate-800"
      >
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
          Login to ERB System
        </h2>

        {error && (
          <div className="bg-rose-50 text-rose-500 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
