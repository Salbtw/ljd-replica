import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  fullName: string;
  email: string;
  token: string;
  candidate: {
    dateOfBirth: string;
    name: string;
    role: string;
    qualification: string;
    nationality: string;
    email: string;
    github: string;
    linkedin: string;
    expectedSalary: string;
    ownCar: boolean;
    noticePeriod: string;
    immigrationStatus: string;
    overview: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
}

const initialState: UserState = {
  id: '',
  fullName: '',
  email: '',
  token: '',
  candidate: {
    dateOfBirth: '',
    name: '',
    role: '',
    qualification: '',
    nationality: '',
    email: '',
    github: '',
    linkedin: '',
    expectedSalary: '',
    ownCar: false,
    noticePeriod: '',
    immigrationStatus: '',
    overview: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
  },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
        state = { ...state, ...action.payload };
        return state;
      },
      clearUser: () => initialState,
    },
  });

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
