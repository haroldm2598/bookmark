import { useSelector, useDispatch } from 'react-redux';
import { handleQuestionClick } from '../../state/features/Index';
import Info from '../../components/Info';
import Button from '../../components/Button';

function Index() {
	const { questionItem, isQuestionClick } = useSelector(
		(state) => state.dataTemplate
	);
	const dispatch = useDispatch();

	return (
		<section className='max-w-4xl mx-auto py-20 flex flex-col items-center gap-5'>
			<Info
				customTitle='font-medium text-2xl md:text-4xl'
				customDesc='w-[26rem] md:w-[32rem] text-center opacity-60'
				title='Frequently Asked Questions'
				description='Here are some of our FAQs. If you have any other questions you’d like 
				answered please feel free to email us.'
			/>

			{questionItem?.map((item, index) => (
				<div
					key={index}
					className={`${
						isQuestionClick === index ? 'collapse-open' : 'collapse-close'
					} collapse collapse-arrow last:gap-0`}
					onClick={() => dispatch(handleQuestionClick(index))}
				>
					<div className='collapse-title questionCollapse text-xl font-medium cursor-pointer'>
						{item.question}
					</div>
					<div className='collapse-content'>
						<p>{item.answer}</p>
					</div>

					<hr />
				</div>
			))}

			<Button name='More Info' customClass='heroBtn' />
		</section>
	);
}

export default Index;
