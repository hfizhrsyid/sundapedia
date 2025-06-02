import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from './pages/home/';
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Pembelajaran from './pages/pembelajaran/';
import Kamus from './pages/kamus/';
import Budaya from './pages/budaya/';
import ReactDOM from "react-dom/client";
import NotFound from './pages/notfound';
import Other from './pages/admin/other/Other.jsx';
import HalamanPembelajaran from './pages/pembelajaran/HalamanPembelajaran.jsx';
import EditPart from './pages/admin/dashboard/EditPart.jsx';
import AdminLogin from './pages/admin/login/Login.jsx';
import { AuthProvider, useAuth } from './auth/AuthProvider';

// Wrapper to extract params for EditPart
import { useParams } from 'react-router-dom';
function EditPartWrapper() {
  const { courseId, partId } = useParams();
  return <EditPart courseId={courseId} partId={partId} />;
}

function ProtectedRoute({ children, adminOnly }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/admin/login" />;
  // ...adminOnly logic...
  return children;
}

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <ProtectedRoute adminOnly><DashboardLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "other", element: <Other /> },
      { path: "edit/:courseId/:partId", element: <EditPartWrapper /> },
    ],
  },
  { path: '/admin/login', element: <AdminLogin />},
  { element: <Home />, index: true },
  { path: "/kamus", element: <Kamus /> },
  { path: "/budaya", element: <Budaya /> },
  { path: "/pembelajaran", element: <Pembelajaran /> },
  { path: "/pembelajaran/:partSlug", element: <HalamanPembelajaran /> },
  { path: "*", element: <NotFound /> }
]);

function DashboardLayout() {
  return <Outlet />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

// Percobaan penggunaan createBrowserRouter untuk pengaturan routing yang lebih simpel
// import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from './pages/home/home.jsx';
// import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
// import ReactDOM from "react-dom/client";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     Component: Home,
//     children: [
//       { index: true, Component: Home },
//       { path: "dashboard", Component: Dashboard },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )
