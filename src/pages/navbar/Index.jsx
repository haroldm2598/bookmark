import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Logo from '../../assets/images/logo-bookmark.svg';

function Index() {
	const { navLinks } = useSelector((state) => state.dataTemplate);

	return (
		<header className='navbar max-w-7xl mx-auto relative z-50'>
			<section className='navbar-start cursor-pointer'>
				<img src={Logo} alt='Bookmark Logo' />
			</section>

			<nav className='navbar-end hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 mr-10 gap-10'>
					{navLinks?.map((item, index) => (
						<li key={index} className='navbarBg py-2 text-lg cursor-pointer'>
							{item}
						</li>
					))}
				</ul>

				<Button name='Login' customClass='loginBtn w-44' />
			</nav>

			<section className='navbar-end flex lg:hidden'>
				<nav className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						// min-w-[18rem] max-w-[40rem]
						className='footerBg text-white flex flex-col gap-10 menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box min-w-[30rem] h-[40rem]'
					>
						{navLinks?.map((item, index) => (
							<li key={index}>
								<a className='text-2xl'>{item}</a>
							</li>
						))}
						<Button name='Login' />
					</ul>
				</nav>
			</section>
		</header>
	);
}

export default Index;
