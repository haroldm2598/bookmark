import Header from './pages/navbar/Index';
import Footer from './pages/footer/Index';
import HeroSection from './pages/hero/Index';
import FeatureSection from './pages/features/Index';
import DownloadSection from './pages/download/Index';
import QuestionSection from './pages/question/Index';
import ContactSection from './pages/contact/Index';

import './assets/styles/main.scss';

function App() {
	return (
		<div className='h-screen'>
			<Header />
			<main>
				<HeroSection />
				<FeatureSection />
				<DownloadSection />
				<QuestionSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
