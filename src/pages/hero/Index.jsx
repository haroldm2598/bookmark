import image from '../../assets/images/illustration-hero.svg';
import Hero from '../../components/Hero';

function Index() {
	return (
		<>
			<Hero
				title='A Simple Bookmark Manager'
				description='A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.'
				image={image}
				firstBtn='Get it on Chrome'
				secondBtn='Get it on Firefox'
				orderInfo='order-2 md:order-1'
				orderImage='order-1 md:order-2'
				blogPosition='w-full h-[70%] top-[10rem] right-[-5rem] md:right-[-10rem]'
			/>
		</>
	);
}

export default Index;
