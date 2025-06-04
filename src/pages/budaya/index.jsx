import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import BudayaPage from './BudayaPage';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import LoadingScreen from '../../components/LoadingScreen';
import Footer from '../../components/Footer';

// komponen card budaya
const BudayaCard = ({ title, image, bgColor, slug }) => (
	<div className={`rounded-lg overflow-hidden w-60 bg-secondary cursor-pointer transition duration-300 transform hover:-translate-y-2 hover:shadow-xl`} onClick={() => window.location.href = `/budaya/${slug}`}>
		<div className='pt-8 flex flex-row justify-center items-center'>
			<img src={image} alt={title} className="w-auto h-30 object-cover grayscale-100" />
		</div>
		<div className="p-4 flex flex-col items-center justify-between">
			<h3 className="text-white font-semibold text-lg text-center">
				{title}
			</h3>
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
		<>
			<Navbar />
			<div className="flex flex-col items-center justify-center h-[calc(100vh-132px)]">
				<LoadingScreen />
			</div>
			<Footer />
		</>
	)
	if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

	return (
		<React.Fragment>
			<Navbar />
			<div className="p-8 text-center min-h-[calc(100vh-132px)]">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
					Budaya Sunda
				</h2>
				<p className="text-md text-center mb-8">
					Pelajari lebih lanjut tentang budaya Sunda di halaman ini.
				</p>

				<div className="flex justify-center mb-8">
					<input
						type="text"
						placeholder="Cari budaya daerah..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="input input-bordered mb-4"
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
								slug={item.slug}
							/>
						))
					) : (
						<p className="text-base text-center">
							Budaya tidak ditemukan.
						</p>
					)}
				</div>
			</div>
			<Footer />
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
