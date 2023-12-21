import { useSelector } from 'react-redux';

import Info from '../../components/Info';
import Button from '../../components/Button';

function Index() {
	const { downloadItem } = useSelector((state) => state.dataTemplate);

	return (
		<section className='py-10'>
			<section className='max-w-4xl mx-auto flex flex-col items-center gap-5 md:gap-10'>
				<Info
					customTitle='font-medium text-2xl md:text-4xl'
					customDesc='w-[26rem] md:w-[32rem] text-center opacity-60'
					title='Download the extension'
					description='We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                got a favourite you’d like us to prioritize.'
				/>
			</section>

			<section className='max-w-6xl  mx-10 md:mx-auto my-10 flex flex-col md:flex-row md:justify-around gap-10 md:gap-10'>
				{downloadItem?.map((item, index) => (
					<div
						key={index}
						className={`${item.customStyle} downloadHover w-full h-96 flex flex-col justify-around items-center rounded-xl shadow-xl`}
					>
						<figure>
							<img src={item.image} alt={item.title} />
						</figure>
						<h1 className='text-2xl font-medium'>{item.title}</h1>
						<h6 className='opacity-60'>{item.compatible}</h6>

						<hr className='hrDotted' />

						<Button
							name={item.btnName}
							customClass='heroBtn self-stretch mx-4'
						/>
					</div>
				))}
			</section>
		</section>
	);
}

export default Index;
