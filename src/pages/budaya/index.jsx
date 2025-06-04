import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import BudayaPage from './BudayaPage';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import LoadingScreen from '../../components/LoadingScreen';

// komponen card budaya
const BudayaCard = ({ title, image, bgColor, slug }) => (
	<div
		className={`rounded-lg overflow-hidden shadow border border-gray-300 w-60 ${bgColor}`}
	>
    <div className='py-2 flex flex-row justify-center items-center'>
		  <img src={image} alt={title} className="w-auto h-40 object-cover" />
    </div>
		<div className="p-4 flex flex-col items-center justify-between min-h-[120px]">
			<h3 className="text-white font-semibold text-lg text-center">
				{title}
			</h3>
			<Link
				to={`/budaya/${slug}`}
				className="text-white text-sm font-medium hover:underline"
			>
				Selengkapnya
			</Link>
		</div>
	</div>
);

function Budaya() {
	const [searchTerm, setSearchTerm] = useState('');
	const [budayaList, setBudayaList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchBudaya() {
			setLoading(true);
			setError(null);
			try {
				const snap = await getDocs(collection(db, 'budaya'));
				setBudayaList(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
			} catch (e) {
				setError('Failed to fetch budaya');
			}
			setLoading(false);
		}
		fetchBudaya();
	}, []);

	// filter budaya sesuai input search
	const filteredBudaya = budayaList.filter((item) =>
		item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (loading) return (
    <div>
      <Navbar />
      <LoadingScreen />
    </div>
  )
	if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

	return (
		<React.Fragment>
			<Navbar />
			<div className="p-8 text-center">
				<h1 className="text-3xl font-bold mb-2">Budaya Sunda</h1>
				<p className="mb-8">
					Pelajari lebih lanjut tentang budaya Sunda di halaman ini.
				</p>

				<div className="flex justify-center mb-8">
					<input
						type="text"
						placeholder="Cari budaya Sunda..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="border border-gray-300 rounded px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-cyan-500"
					/>
				</div>

				{/* list card budaya */}
				<div className="flex flex-wrap gap-5 justify-center">
					{filteredBudaya.length > 0 ? (
						filteredBudaya.map((item, index) => (
							<BudayaCard
								key={index}
								title={item.title}
								image={item.logo || item.imageUrl}
								bgColor={item.bgColor || 'bg-cyan-500'}
								slug={item.slug}
							/>
						))
					) : (
						<p className="text-gray-500 text-center">
							Budaya tidak ditemukan.
						</p>
					)}
				</div>
			</div>
		</React.Fragment>
	);
}

function BudayaDynamic() {
	const { slug } = useParams();
	// Normalize slug to lowercase for matching
	return <BudayaPage slug={slug?.toLowerCase()} />;
}

export { Budaya, BudayaDynamic };
export default Budaya;
