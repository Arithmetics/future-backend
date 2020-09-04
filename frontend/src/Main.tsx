import React, { useEffect } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { photosSelector, getPhotos } from './features/photos/PhotoSlice';

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const { photos, loading, errors } = useSelector(photosSelector);

  console.log(photos, loading, errors);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return <div>${JSON.stringify(photos)}</div>;
}

export default Main;
