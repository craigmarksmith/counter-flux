import React from 'react';
import AppActions from '../actions/app-actions'

export default (props) => {
  return (
    <div>
      <div>Hello</div>
      <button
        className="btn btn-default btn-sm"
        onClick={ AppActions.increment.bind(null, 'add') }>
        Add
      </button>
    </div>
  )
}