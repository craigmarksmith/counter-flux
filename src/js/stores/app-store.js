import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _counter = 0;

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },
  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },
  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },
  getCurrentCount(){
    return _counter;
  },
  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.INCREMENT:
        _counter++;
        break;
      case AppConstants.DECREMENT:
        _counter--;
        break;
    }
    AppStore.emitChange();
  })
})
export default AppStore
