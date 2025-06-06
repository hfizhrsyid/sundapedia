import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from './pages/home/';
import Dashboard from "./pages/admin/dashboard";
import Pembelajaran from './pages/pembelajaran/';
import Kamus from './pages/kamus/';
import Aksara from './pages/aksara/';
import Budaya, { BudayaDynamic } from './pages/budaya/index.jsx';
import ReactDOM from "react-dom/client";
import NotFound from './pages/notfound';
import Other from './pages/admin/other/Other.jsx';
import HalamanPembelajaran from './pages/pembelajaran/HalamanPembelajaran.jsx';
import EditPart from './pages/admin/dashboard/EditPart.jsx';
import AdminLogin from './pages/admin/login/Login.jsx';
import { AuthProvider, useAuth } from './auth/AuthProvider';
import LoadingScreen from './components/LoadingScreen.jsx';

// Wrapper to extract params for EditPart
import { useParams } from 'react-router-dom';
import PembelajaranAdmin from './pages/admin/dashboard/Pembelajaran.jsx';
import BudayaAdmin from './pages/admin/dashboard/BudayaDaerah.jsx';
function EditPartWrapper() {
  const { courseId, partId } = useParams();
  return <EditPart courseId={courseId} partId={partId} />;
}

function ProtectedRoute({ children, adminOnly }) {
  const { user, loading } = useAuth();
  if (loading) return <LoadingScreen /> 
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
      { path: "pembelajaran", element: <PembelajaranAdmin /> },
      { path: "budaya", element: <BudayaAdmin /> },
      { path: "pembelajaran/:courseId/:partId", element: <EditPartWrapper /> },
    ],
  },
  { path: '/admin/login', element: <AdminLogin />},
  { element: <Home />, index: true },
  { path: "/kamus", element: <Kamus /> },
  { path: "/aksara", element: <Aksara /> },
  { path: "/budaya", element: <Budaya /> },
  { path: "/budaya/:slug", element: <BudayaDynamic /> },
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
