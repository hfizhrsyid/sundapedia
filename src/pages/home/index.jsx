import Navbar from "../../components/Navbar"
import logoSundapedia from "../../assets/logo-only-black.svg"
import bookIcon from "../../assets/books.svg"
import learningIcon from "../../assets/learning.svg"
import cultureIcon from "../../assets/culture.svg"

const Feature = ({ image, imageAlt, description }) => {
  return (
    <li className="flex flex-row items-center gap-3 p-3 rounded-lg bg-gray-100">
      <img src={image} alt={imageAlt} className="max-h-30" />
      <div className="flex-1">
        <span className="block text-lg font-bold leading-tight">{imageAlt}</span>
        <span className="block text-sm leading-snug">{description}</span>
      </div>
    </li>
  )
} 

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="hero min-h-144">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={logoSundapedia}
            className="min-w-sm rounded-lg"
          />
          <div className="text-black">
            <h1 className="text-5xl font-bold">Selamat Datang!</h1> 
            <h1 className="text-5xl font-bold">Wilujeng Sumping!</h1> 
            <p className="py-6">
              Ini merupakan situs pembelajaran bahasa dan budaya Sunda. Lihat lebih lanjut untuk mempelajarinya!
            </p>
            <div className="flex flex-row gap-3">
              <button className="btn btn-primary">Masuk</button>
              <button className="btn btn-primary">Daftar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-36 my-10 text-black">
        <h1 className="font-bold">Tentang Sundapedia</h1>
        <div className="flex justify-center max-w-256">
          <p className="text-center">Sundapedia merupakan situs yang dibuat oleh empat orang mahasiswa, yaitu Alvyn, Hafizh, Sandy, dan Yarania. Situs ini dibuat dengan tujuan agar Bahasa Sunda tetap terus digunakan dan dilestarikan di lingkungan masyarakat.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-36 mt-10 text-black">
        <h2 className="text-2xl mb-4">Ada apa saja di Sundapedia?</h2>
        <ol className="w-full max-w-3xl space-y-2">
          <Feature image={bookIcon} imageAlt={"Kamus"} description={"Sundapedia menyediakan kamus untuk menerjemahkan Bahasa Sunda ke Bahasa Indonesia maupun sebaliknya"} />
          <Feature image={learningIcon} imageAlt={"Pembelajaran bahasa"} description={"Pembelajaran Bahasa Sunda dilakukan secara bertahap dan disajikan secara interaktif dengan fitur-fitur yang ada!"} />
          <Feature image={cultureIcon} imageAlt={"Pengenalan budaya"} description={"Budaya juga dipelajari dengan pengenalan sejarah, kuliner, dan lainnya."} />
        </ol>
      </div>
    </div>
  )
}

export default Home
