import Navbar from "../../components/Navbar";
import logoReact from "../../assets/react.svg"

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero bg-base-200 min-h-128">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={logoReact}
            className="min-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Selamat Datang!</h1> 
            <h1 className="text-5xl font-bold">Wilujeng Sumping!</h1> 
            <p className="py-6">
              Ini merupakan situs pembelajaran bahasa dan budaya Sunda. Scroll lebih lanjut untuk mempelajarinya!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-36 my-10">
        <h1 className="font-bold">Tentang Sundapedia</h1>
        <div className="flex justify-center max-w-256">
          <p className="text-center">Sundapedia merupakan situs yang dibuat oleh empat orang mahasiswa, yaitu Alvyn, Hafizh, Sandy, dan Yarania. Situs ini dibuat agar Bahasa Sunda tetap terus digunakan dan dilestarikan di lingkungan masyarakat.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-36 my-10">
        <h2 className="text-2xl">Ada apa saja di Sundapedia?</h2>
        <ol>
          <li>Kamus</li>
          <li>Pembelajaran bahasa</li>
          <li>Pengenalan bahasa</li>
        </ol>
      </div>
    </>
  )
}

export default Home
