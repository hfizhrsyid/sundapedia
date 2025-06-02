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
import Banten from './pages/budaya/banten.jsx';
import Bandung from './pages/budaya/bandung.jsx';
import Sumedang from './pages/budaya/sumedang.jsx';
import Bogor from './pages/budaya/bogor.jsx';
import Garut from './pages/budaya/garut.jsx';
import Tasikmalaya from './pages/budaya/tasik.jsx';
import Purwakarta from './pages/budaya/purwakarta.jsx';
import Banjar from './pages/budaya/banjar.jsx';




const router = createBrowserRouter([
  {
    path: "/admin",
    children: [
      { index: true, element: <Dashboard />, },
      { path: "/admin/other", element: <Other /> },
      
    ],
  },
  { element: <Home />, index: true },
  { path: "/kamus", element: <Kamus /> },
  { path: "/budaya", element: <Budaya /> },
  { path: "/budaya/banten", element: <Banten /> },
  { path: "/budaya/bandung", element: <Bandung /> },
  { path: "/budaya/sumedang", element: <Sumedang /> },
  { path: "/budaya/bogor", element: <Bogor /> },
  { path: "/budaya/garut", element: <Garut /> },
  { path: "/budaya/tasikmalaya", element: <Tasikmalaya /> },
  { path: "/budaya/banjar", element: <Banjar /> },
  { path: "/budaya/purwakarta", element: <Purwakarta /> },
  { path: "/pembelajaran", element: <Pembelajaran /> },
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
