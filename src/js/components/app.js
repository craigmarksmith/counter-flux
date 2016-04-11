import React from 'react';
import AppActions from '../actions/app-actions'
import AppStore from '../stores/app-store';

class App extends React.Component {

  constructor(props){
    super();
    this.state = {currentCount: AppStore.getCurrentCount()};
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener( this._onChange )
  }
  componentWillUnmount(){
    AppStore.removeChangeListener( this._onChange )
  }
  _onChange(){
    this.setState( {currentCount: AppStore.getCurrentCount()} )
  }

  render(){
    return (
      <div>
        <div>{this.state.currentCount}</div>
        <button
          className="btn btn-default btn-sm"
          onClick={ AppActions.increment.bind(null, '') }>
          Add
        </button>
        <button
          className="btn btn-default btn-sm"
          onClick={ AppActions.decrement.bind(null, '') }>
          Subtract
        </button>
      </div>
    )
  }

}

export default App;