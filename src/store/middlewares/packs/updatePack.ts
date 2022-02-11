import { AxiosError } from 'axios';

import { setIsLoadingAC, setNotificationAC } from '../../reducers/appReducer';

import { packsAPI } from 'api';
import { setPacksTC } from 'store/middlewares';
import { AppThunk } from 'types';

export const updatePackTC =
  (packId: string, newName: string, closeModal: () => void): AppThunk =>
  dispatch => {
    dispatch(setIsLoadingAC(true));
    packsAPI
      .updatePack(packId, newName)
      .then(res => {
        console.log(res.data);
        closeModal();
      })
      .then(() => {
        dispatch(setPacksTC());
        dispatch(setNotificationAC('Pack was updated'));
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
        // const errorNetwork = e.response
        //   ? e.response.data.error
        //   : `${e.message}, more details in the console`;
        // // dispatch(setErrorMessageNetworkAC(errorNetwork));
      })
      .finally(() => {
        dispatch(setIsLoadingAC(false));
      });
  };