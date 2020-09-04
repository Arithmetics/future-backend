import React, { useEffect } from 'react';
import './App.css';

import { PageContent, Box, Provider as BumbagProvider } from 'bumbag';

import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch
} from 'react-redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import photosSliceReducer, {
  PhotoState,
  photosSelector,
  getPhotos
} from './features/photos/PhotoSlice';

import Main from './Main';

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    photosStore: photosSliceReducer

    // anyOtherStore: anyOtherSlice,
    // middleware: ['array of middlewares'],
  },
  devTools: process.env.NODE_ENV !== 'development' ? false : true
});

function App(): JSX.Element {
  return (
    <ReduxProvider store={store}>
      <BumbagProvider>
        <Box>
          <PageContent>
            <Main />
          </PageContent>
        </Box>
      </BumbagProvider>
    </ReduxProvider>
  );
}

export default App;
