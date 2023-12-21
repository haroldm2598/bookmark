import { createSlice } from '@reduxjs/toolkit';

import image1 from '../../assets/images/illustration-features-tab-1.svg';
import image2 from '../../assets/images/illustration-features-tab-2.svg';
import image3 from '../../assets/images/illustration-features-tab-3.svg';

import downloadImg1 from '../../assets/images/logo-chrome.svg';
import downloadImg2 from '../../assets/images/logo-firefox.svg';
import downloadImg3 from '../../assets/images/logo-opera.svg';

import footerImg1 from '../../assets/images/icon-facebook.svg';
import footerImg2 from '../../assets/images/icon-twitter.svg';

const initialState = {
	value: '',
	navLinks: ['Features', 'Pricing', 'Contact'],
	footerIcon: [footerImg1, footerImg2],
	featureLink: ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'],
	featureItem: [
		{
			image: image1,
			title: 'Bookmark in one click',
			description:
				'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. ',
			btnName: 'More Info'
		},
		{
			image: image2,
			title: 'Intelligent search',
			description:
				'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
			btnName: 'More Info'
		},
		{
			image: image3,
			title: 'Share your bookmarks',
			description:
				' Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
			btnName: 'More Info'
		}
	],
	downloadItem: [
		{
			image: downloadImg1,
			title: 'Add to Chrome',
			compatible: 'Minimum version 62',
			btnName: 'Add & Install Extension'
		},
		{
			customStyle: 'mt-0 md:mt-10',
			image: downloadImg2,
			title: 'Add to Firefox',
			compatible: 'Minimum version 55',
			btnName: 'Add & Install Extension'
		},
		{
			customStyle: 'mt-0 md:mt-16',
			image: downloadImg3,
			title: 'Add to Opera',
			compatible: 'Minimum version 46',
			btnName: 'Add & Install Extension'
		}
	],
	questionItem: [
		{
			question: 'What is Bookmark?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
		},
		{
			question: 'How can I request a new browser?',
			answer:
				'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
		},
		{
			question: 'Is there a mobile app?',
			answer:
				'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
		},
		{
			question: 'What about other Chromium browsers?',
			answer:
				'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
		}
	],
	isQuestionClick: null
};

const dataSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		handleQuestionClick: (state, action) => {
			if (state.isQuestionClick === action.payload) {
				state.isQuestionClick = null;
			}

			state.isQuestionClick = action.payload;
		}
	}
});

export const { handleQuestionClick } = dataSlice.actions;

export default dataSlice.reducer;
