import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './../../App';

export interface PhotoState {
  photos: object[];
  loading: boolean;
  errors: string;
}

const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: ''
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setPhotos: (state, { payload }: PayloadAction<object[]>) => {
      state.photos = payload;
    }
  }
});

export const { setLoading, setErrors, setPhotos } = photoSlice.actions;

export default photoSlice.reducer;

export const photosSelector = (state: {
  photosStore: PhotoState;
}): PhotoState => state.photosStore;

export const getPhotos = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/mew');
      const jsonResponse = await res.json();

      dispatch(setLoading(false));
      dispatch(setPhotos(jsonResponse));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
