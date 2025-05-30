import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/';
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Pembelajaran from './pages/pembelajaran/';
import Kamus from './pages/kamus/';
import Budaya from './pages/budaya/';
import ReactDOM from "react-dom/client";
import NotFound from './pages/notfound';
import Other from './pages/admin/other/Other.jsx';
import HalamanPembelajaran from './pages/pembelajaran/HalamanPembelajaran.jsx';

const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/admin/other", element: <Other /> },
    ],
  },
  { element: <Home />, index: true },
  { path: "/kamus", element: <Kamus /> },
  { path: "/budaya", element: <Budaya /> },
  { path: "/pembelajaran", element: <Pembelajaran /> },
  { path: "/pembelajaran/:partSlug", element: <HalamanPembelajaran /> }, // <-- move this out!
  { path: "*", element: <NotFound /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
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
