import { useSelector } from 'react-redux';

import Hero from '../../components/Hero';
import Info from '../../components/Info';

function Index() {
	const { featureLink, featureItem } = useSelector(
		(state) => state.dataTemplate
	);

	return (
		<section className='relative'>
			<section className='max-w-4xl mx-auto flex flex-col items-center gap-10'>
				<Info
					customTitle='font-medium text-2xl md:text-4xl'
					customDesc='w-[26rem] md:w-[32rem] text-center opacity-60'
					title='Features'
					description='Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.'
				/>

				<div className='w-full flex flex-col md:flex-row items-center md:items-start justify-around gap-10 md:gap-0'>
					{featureLink?.map((item, index) => (
						<a
							key={index}
							href={`#carousel_${index}`}
							className='hover:text-red-500 transition-all duration-500 ease-in-out'
						>
							{item}
						</a>
					))}
				</div>

				<hr className='w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded ' />
			</section>

			<section className='carousel w-full'>
				{featureItem?.map((item, index) => (
					<div
						key={index}
						id={`carousel_${index}`}
						className='carousel-item w-full'
					>
						<Hero
							title={item.title}
							description={item.description}
							image={item.image}
							firstBtn={item.btnName}
							orderInfo='order-2 md:order-2'
							orderImage='order-1 md:order-1'
							// blogPosition='w-[60%] md:w-[93.6%] h-[80%] top-[30%] right-[40%] md:top-[-10rem] md:right-[10rem] scale-x-[-1]'
						/>
					</div>
				))}

				{/*blogPosition='w-[93.6%] top-[60%] right-[40%] md:right-[10rem] scale-x-[-1]' */}
			</section>

			<div className='bgShape absolute z-0 w-[93.6%] h-[20%] md:h-[25%] top-[45%] right-[10%] md:top-[70%] md:right-[60%] scale-x-[-1]'></div>
		</section>
	);
}

export default Index;
