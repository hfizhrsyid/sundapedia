import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useParams } from 'react-router-dom';
import BudayaPage from './BudayaPage';

const budayaList = [
	{
		title: 'Banten',
		image: 'logobanten.jpg',
		bgColor: 'bg-amber-400',
		slug: 'banten',
	},
	{
		title: 'Bandung',
		image: '/img/sate-bandeng.jpg',
		bgColor: 'bg-cyan-500',
		slug: 'bandung',
	},
	{
		title: 'Sumedang',
		image: '/img/batagor.jpg',
		bgColor: 'bg-amber-400',
		slug: 'sumedang',
	},
	{
		title: 'Bogor',
		image: '/img/talas.jpg',
		bgColor: 'bg-cyan-500',
		slug: 'bogor',
	},
	{
		title: 'Garut',
		image: '/img/angklung.jpg',
		bgColor: 'bg-amber-400',
		slug: 'garut',
	},
	{
		title: 'Tasikmalaya',
		image: '/img/jaipongan.jpg',
		bgColor: 'bg-cyan-500',
		slug: 'tasikmalaya',
	},
	{
		title: 'Banjar',
		image: '/img/karedok.jpg',
		bgColor: 'bg-amber-400',
		slug: 'banjar',
	},
	{
		title: 'Purwakarta',
		image: '/img/wayang-golek.jpg',
		bgColor: 'bg-cyan-500',
		slug: 'purwakarta',
	},
];

// komponen card budaya
const BudayaCard = ({ title, image, bgColor, slug }) => (
	<div
		className={`rounded-lg overflow-hidden shadow border border-gray-300 w-60 ${bgColor}`}
	>
		<img src={image} alt={title} className="w-full h-40 object-cover" />
		<div className="p-4 flex flex-col items-center justify-between min-h-[120px]">
			<h3 className="text-white font-semibold text-lg text-center">
				{title}
			</h3>
			<Link
				to={`/budaya/${slug}`}
				className="mt-2 text-white text-sm font-medium hover:underline"
			>
				Selengkapnya
			</Link>
		</div>
	</div>
);

function Budaya() {
	const [searchTerm, setSearchTerm] = useState('');

	// filter budaya sesuai input search
	const filteredBudaya = budayaList.filter((item) =>
		item.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<Navbar />
			<div className="p-8 text-center">
				<h1 className="text-3xl font-bold mb-2">Budaya Sunda</h1>
				<p className="mb-8">
					Pelajari lebih lanjut tentang budaya Sunda di halaman ini.
				</p>

				{/* search input */}
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
								image={item.image}
								bgColor={item.bgColor}
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
		</>
	);
}

function BudayaDynamic() {
	const { slug } = useParams();
	// Normalize slug to lowercase for matching
	return <BudayaPage slug={slug?.toLowerCase()} />;
}

export { Budaya, BudayaDynamic };
export default Budaya;
