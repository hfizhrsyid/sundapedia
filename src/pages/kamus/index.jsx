import rawData from "../../utils/kamus.json"; // Data by hibersunda
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Kamus() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const data = rawData.words;

  useEffect(() => {
    if (search.length < 3) {
      setFiltered([]);
    } else {
      const result = data.filter((item) =>
        item.bindo?.toLowerCase().includes(search.toLowerCase()) ||
        item.sorangan?.toLowerCase().includes(search.toLowerCase()) ||
        item.batur?.toLowerCase().includes(search.toLowerCase()) ||
        item.loma?.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }
  }, [search, data]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mt-8 mb-16 flex flex-grow flex-col items-center mx-auto max-w-[calc(100vw-30px)]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 mx-4">Kamus Terjemahan Indonesia-Sunda<br />dan Undak-usuk basa</h2>
        <p className="text-md max-w-xl text-center mb-8">
          Masukkan kata dalam Bahasa Indonesia atau Sunda untuk mencari terjemahan dan undak-usuknya.
        </p>
        <input
          type="text"
          className="input input-bordered mb-4"
          placeholder="Cari kata..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="rounded-box border border-base-content/5 bg-base-200 mt-6 overflow-x-auto max-w-[calc(100vw-30px)]">
          <table className="min-w-[700px] table table-pin-rows ">
            <thead>
              <tr>
                <th>No.</th>
                <th>Indonesia</th>
                <th>Sunda (sorangan)</th>
                <th>Sunda (batur)</th>
                <th>Sunda (loma)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                <>
                  {filtered.map((item, id) => (
                    <tr key={id}>
                      <th>{id + 1}</th>
                      <td>{item.bindo}</td>
                      <td>{item.sorangan}</td>
                      <td>{item.batur}</td>
                      <td>{item.loma}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="text-center text-md h-36"><td colSpan={5}>Tidak ada data</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kamus;
