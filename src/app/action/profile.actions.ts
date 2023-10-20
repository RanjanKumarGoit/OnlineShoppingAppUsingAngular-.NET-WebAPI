import { createAction, props } from '@ngrx/store';
import { Profile } from '../model/profile';

export const setProfileData = createAction(
  '[Profile] Set Profile Data',
  props<{ profileData: Profile, isAdmin: boolean, isLoggedIn: boolean }>()
);

export const logout = createAction('[Auth] Logout');
