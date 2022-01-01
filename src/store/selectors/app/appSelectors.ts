import { RootStateType } from 'store';
import { Nullable } from 'types';

export const getError = (state: RootStateType): Nullable<string> => state.app.error;
export const getIsAuth = (state: RootStateType): boolean => state.app.isAuth;
export const getIsLoading = (state: RootStateType): boolean => state.app.isLoading;