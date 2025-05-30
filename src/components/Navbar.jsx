import logoUrl from '../assets/logo-full.svg';
import Home from '../pages/home';

function Navbar() {
	return (
		<>
			<div className="navbar shadow-sm h-[70px] bg-[#D3A373]">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							<li><a href='/pembelajaran'>Bahasa</a></li>
							<li><a href='/kamus'>Kamus</a></li>
							<li><a href='/budaya'>Budaya</a></li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl"><img src={logoUrl} width="150px"/></a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li><a href='/'>Beranda</a></li>
						{/* <li>
							<details>
								<summary>Parent</summary>
								<ul className="p-2">
									<li><a>Submenu 1</a></li>
									<li><a>Submenu 2</a></li>
								</ul>
							</details>
						</li> */}
						<li><a href='/pembelajaran'>Bahasa</a></li>
						<li><a href='/kamus'>Kamus</a></li>
						<li><a href='/budaya'>Budaya</a></li>
					</ul>
				</div>
				<div className="navbar-end">
					{/* <a className="btn">Button</a> */}
				</div>
			</div>
		</>
	)
}

export default Navbar