import { Profile } from "./profile";

export interface AppState {
    profileData: Profile;
    isAdmin: boolean;
    isLoggedIn: boolean;
  }
  