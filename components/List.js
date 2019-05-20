import React from 'react';
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return{
    pets: state.pets
}
}

const List = (props) => {
  return (
    <div>
    <br/>
    <strong>PET DIRECTORY BELOW:</strong> <br/>
    (refresh to show new pet)
    <ol >
      {props.pets.map(p=><li key={p.id} > {p.name}   |   {p.type}
      </li>)}

    </ol>
    </div>
  )
}

export default connect(mapStateToProps)(List);