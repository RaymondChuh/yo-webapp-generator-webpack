import React from 'react'
import {connect} from 'react-redux';
import {addUser} from "../actions/action.js";

const UserInput = ({dispatch}) => {
    let input
    return (
        <div>
          <input type="text" ref={node => input = node}></input>
          <button onClick={e => dispatch(addUser(input.value))}>Add</button>
        </div>
    )

}
export default connect()(UserInput);
