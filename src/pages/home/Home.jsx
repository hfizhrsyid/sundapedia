import { Outlet, Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1>Selamat Datang di Sundapedia</h1>
      <p>Gerbang Anda untuk belajar Bahasa dan Budaya Sunda di Indonesia.</p>
      <div className="home-links">
        <Link to="/home/pembelajaran" className="home-link">Belajar (Learning)</Link>
        <Link to="/home/kamus" className="home-link">Kamus (Dictionary)</Link>
        <Link to="/home/budaya" className="home-link">Budaya (Culture)</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
