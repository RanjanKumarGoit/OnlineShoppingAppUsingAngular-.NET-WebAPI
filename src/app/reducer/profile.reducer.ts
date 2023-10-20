import { createReducer, on } from '@ngrx/store';
import { setProfileData, logout } from '../action/profile.actions';
import { Profile } from '../model/profile';
import { AppState } from '../model/appstate';

export const initialState: AppState = {
    profileData: {
        id: 0,
        name: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        address: {
            addressID: 0,
            country: '',
            state: '',
            city: '',
            userID: 0
        }
    },
    isAdmin: false,
    isLoggedIn: false
};

export const profileReducer = createReducer(
  initialState,
  on(setProfileData, (state, { profileData, isLoggedIn, isAdmin }) => {
    return { ...state, profileData, isLoggedIn, isAdmin };
  }),
  on(logout, (state: any) => {
    return { ...state, profileData: {
      id: 0,
      name: '',
      email: '',
      password: '',
      phone: '',
      role: '',
      address: {
          addressID: 0,
          country: '',
          state: '',
          city: '',
          userID: 0
      }
  }, isLoggedIn: false, isAdmin: false };
  })
);
