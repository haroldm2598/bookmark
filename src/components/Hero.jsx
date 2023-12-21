import Button from './Button';
import Info from './Info';

function Hero({
	image,
	title,
	description,
	firstBtn,
	secondBtn,
	orderInfo,
	orderImage,
	blogPosition
}) {
	return (
		<section className='max-w-md md:max-w-7xl mx-auto my-20 flex flex-col md:flex-row md:items-center'>
			<div className={`${orderInfo} flex-1 [&>*]:mb-3 md:[&>*]:mb-5`}>
				<Info
					title={title}
					description={description}
					customTitle='text-center md:text-start text-4xl'
					customDesc='text-center md:text-start'
				/>
				<div className='last:mb-0 [&>*]:mr-5 text-center md:text-start'>
					<Button name={firstBtn} customClass='heroBtn' />
					{secondBtn?.length > 0 && (
						<Button name={secondBtn} customClass='heroBtnOut' />
					)}
				</div>
			</div>

			<div className={`${orderImage} flex-1 mb-32 md:mb-0 relative`}>
				<div className={`bgShape absolute z-0 ${blogPosition}`}></div>
				<img src={image} alt='Background Image' className='relative z-10' />
			</div>

			{/* <div className={`${orderImage} flex-1 mb-32 md:mb-0 relative`}>
				<div className={`bgShape absolute z-0 ${blogPosition}`}></div>
				<img src={image} alt='Background Image' className='relative z-10' />
			</div> */}
		</section>
	);
}

export default Hero;
