// import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';

function Testing() {
	const { featureLink } = useSelector((state) => state.dataTemplate);

	return (
		<>
			<div className='flex justify-center w-full py-2 gap-2'>
				<a href='#item0'>1</a>
				<a href='#item1'>2</a>
				<a href='#item2'>3</a>
			</div>

			<div className='carousel w-full'>
				{featureLink?.map((item, index) => (
					<div key={index} id={`item${index}`} className='carousel-item w-full'>
						<Hero
							title={item.title}
							description={item.description}
							image={item.image}
							firstBtn={item.btnName}
							orderInfo='order-2 md:order-2'
							orderImage='order-1 md:order-1'
							blogPosition='top-[10rem] right-[-5rem] md:right-[10rem] scale-x-[-1]'
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default Testing;
