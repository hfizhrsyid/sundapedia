import NavbarAdmin from '../../../components/NavbarAdmin';
import bookIcon from "../../../assets/books.svg"
import learningIcon from "../../../assets/learning.svg"
import cultureIcon from "../../../assets/culture.svg"
import aksaraIcon from "../../../assets/aksara.svg"

function Dashboard() {

  const Feature = ({ image, imageAlt, description, slug }) => {
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
            <button className="btn btn-secondary w-full" onClick={() => window.location.href = `/${slug}`}>Selengkapnya</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <NavbarAdmin back={false} />
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className="text-4xl font-extrabold text-center mb-16">Selamat datang!</h2>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {/* <Feature slug="kamus" image={bookIcon} imageAlt={"Kamus & Undak-Usuk"} description={"Fitur kamus beserta undak-usuk basa untuk menerjemahkan Bahasa Sunda ke Bahasa Indonesia maupun sebaliknya"} />
          <Feature slug="aksara" image={aksaraIcon} imageAlt={"Aksara Sunda"} description={"Konversi teks latin ke aksara sunda dan sebaliknya"} /> */}
          <Feature slug="admin/pembelajaran" image={learningIcon} imageAlt={"Pembelajaran Bahasa"} description={"Kelola konten pembelajaran bahasa"} />
          <Feature slug="admin/budaya" image={cultureIcon} imageAlt={"Pengenalan Budaya"} description={"Kelola konten budaya daerah"} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;