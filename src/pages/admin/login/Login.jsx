import { useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import logoUrl from '../../../assets/logo-only.svg';

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      setError("Login gagal. Pastikan email dan password benar.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 p-8 rounded shadow-md w-full max-w-sm flex flex-col items-center"
      >
        <a href='/login' className="flex items-center gap-2 mb-6">
          <img src={logoUrl} width="40px" draggable="false" />
          <p className="text-xl font-medium">Sundapedia <b className="font-extrabold">Admin Login</b>  </p>
        </a>
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2> */}
        {error && <div className="text-error text-center mb-4">{error}</div>}
        <div className="mb-4 w-full">
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-1 text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-primary"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}