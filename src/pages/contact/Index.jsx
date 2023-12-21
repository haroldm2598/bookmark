import Button from '../../components/Button';

function Index() {
	return (
		<section className='contact'>
			<div className='max-w-2xl mx-auto py-10'>
				<div className='[&>*]:mb-5 max-w-lg mx-auto flex flex-col items-center text-center text-white'>
					<h2 className='font-normal uppercase'>35,000+ already joined</h2>
					<h1 className='font-medium text-4xl'>
						Stay up-to-date with what we’re doing
					</h1>
				</div>

				<div className='w-full mx-10 md:mx-20'>
					<input
						type='text'
						placeholder='Enter your email address'
						className='input input-bordered mr-4 mb-4 md:mb-0 w-96'
					/>
					<Button name='Contact Us' customClass='loginBtn w-96 md:w-32' />
				</div>
			</div>
		</section>
	);
}

export default Index;
