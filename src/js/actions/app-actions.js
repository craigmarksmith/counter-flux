import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  increment( thing ){
    dispatch({
      actionType: AppConstants.INCREMENT, thing
    })
  }
}
