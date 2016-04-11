import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  increment(){
    dispatch({
      actionType: AppConstants.INCREMENT
    })
  },
  decrement(){
    dispatch({
      actionType: AppConstants.DECREMENT
    })
  }

}
