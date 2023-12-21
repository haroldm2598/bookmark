import { useSelector } from 'react-redux';
import Logo from '../../assets/images/logo-bookmark-black.svg';

function Index() {
	const { navLinks, footerIcon } = useSelector((state) => state.dataTemplate);

	return (
		<footer className='footerBg '>
			<section className='max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 text-white'>
				<figure>
					<img src={Logo} alt='Bookmark logo' />
				</figure>

				<div className='flex-1 flex flex-col md:flex-row items-center gap-10 uppercase text-base font-normal'>
					{navLinks?.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</div>

				<div className='flex flex-row items-center  gap-10'>
					{footerIcon?.map((item, index) => (
						<figure key={index}>
							<img src={item} alt='icons' />
						</figure>
					))}
				</div>
			</section>
		</footer>
	);
}

export default Index;
