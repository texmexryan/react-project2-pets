import React from 'react';
import {connect} from 'react-redux'
import {addPet } from '../actions/actions'

const mapStateToProps = state => {
  return{
    pets: state.pets,
  }
}

let currentName;
let currentType;

const Add = props => {
  return (
    <div>
    Add pets here:
    <br/>
    <br/>
    <input placeholder ="name" ref={n => (currentName =n)}/>
        <br/>

    <input placeholder ="type" ref={t => (currentType =t)}/>  
        <br/>
        <br/>
    <button onClick={() => {
      console.log(currentName.value)
      console.log(currentType.value)
      
        props.dispatch(addPet(currentName.value, 
        currentType.value));

        currentName.value = null
        currentType.value = ""
    }}> Add Pet!</button>

    </div>
  )
}

export default connect(mapStateToProps)(Add);