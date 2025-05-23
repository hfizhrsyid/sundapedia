import { StrictMode } from 'react'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/home.jsx';
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Pembelajaran from './pages/pembelajaran/Pembelajaran.jsx';
import Kamus from './pages/kamus/Kamus.jsx';
import Budaya from './pages/budaya/Budaya.jsx';
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "pembelajaran", element: <Pembelajaran /> },
      { path: "kamus", element: <Kamus /> },
      { path: "budaya", element: <Budaya /> },
    ],
  },
  {
    path: "/pembelajaran",
    element: <Pembelajaran />
  }
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
