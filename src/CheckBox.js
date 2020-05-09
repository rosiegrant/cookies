import React from 'react'

export const CheckBox = props => {
  return (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value={props.value} 
      checked={props.isChecked}
        onClick={props.handleCheck} id={props.value}></input>
      <label class="form-check-label" for="defaultCheck1">{props.value}</label>
    </div>
  )

}

export default CheckBox