import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/Index';

export const store = configureStore({
	reducer: {
		dataTemplate: dataReducer
	}
});
