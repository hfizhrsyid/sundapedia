import Navbar from "../../components/Navbar"
// import { toSundanese } from "sunda.js"
import bookIcon from "../../assets/books.svg"
import learningIcon from "../../assets/learning.svg"
import cultureIcon from "../../assets/culture.svg"
import aksaraIcon from "../../assets/aksara.svg"

const Feature = ({ image, imageAlt, description }) => {
  return (
    <div className="card bg-base-300 w-80 shadow-sm">
      <figure>
        <img
          className="p-6 h-[150px]"
          src={image}
          alt={imageAlt}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-extrabold text-center">{imageAlt}</h2>
        <p className="text-center">{description}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-secondary w-full">Selengkapnya</button>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero bg-base-100 min-h-[calc(100vh-100px)]">
        <div className="hero-content text-center">
          <div className="max-w-5xl mx-8">
            <h3 className="text-3xl pb-6">{toSundanese("wilujeng sumping di sundapedia")}</h3>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold">Ngajaga Basa, Ngaraksa Budaya, Ngarojong <span className="text-primary">Generasi Bangsa nu Reueus kana Warisan Sunda</span></h1>
            <h3 className="py-6 text-xl">
              Jelajahi kekayaan bahasa, budaya, dan seputar Sunda lainnya di satu tempat.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-4xl font-extrabold mb-16">Ada apa saja di Sundapedia?</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <Feature image={bookIcon} imageAlt={"Kamus & Undak-Usuk"} description={"Fitur kamus beserta undak-usuk basa untuk menerjemahkan Bahasa Sunda ke Bahasa Indonesia maupun sebaliknya"} />
          <Feature image={aksaraIcon} imageAlt={"Aksara Sunda"} description={"Konversi teks latin ke aksara sunda dan sebaliknya"} />
          <Feature image={learningIcon} imageAlt={"Pembelajaran Bahasa"} description={"Pembelajaran Bahasa Sunda dilakukan secara bertahap dan disajikan secara interaktif dengan fitur-fitur yang ada!"} />
          <Feature image={cultureIcon} imageAlt={"Pengenalan Budaya"} description={"Budaya juga dipelajari dengan pengenalan sejarah, kuliner, dan lainnya."} />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-40 mb-20 p-6">
        <p className="text-xl md:text-3xl font-extrabold text-center text-secondary">
          Bahasa dan budaya Sunda adalah bagian penting dari kekayaan Indonesia. Jadilah bagian dari generasi bangsa yang bangga dengan warisan Sunda.
        </p>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-secondary text-secondary-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Rapelita</p>
        </aside>
      </footer>
    </>
  )
}

export default Home
