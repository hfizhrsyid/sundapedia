import { useNavigate } from "react-router";
import notfound from '../../assets/notfound.svg';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function NotFound() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-132px)]">
        <img src={notfound} alt="notfound" className="w-[300px]" />
        <h2 className="text-4xl font-extrabold text-center mt-8">Halaman tidak ditemukan :(</h2>
        <button className="btn btn-secondary mt-8" onClick={() => {navigate(-1)}}>Kembali</button>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
