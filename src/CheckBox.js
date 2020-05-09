import React from 'react'

// export const CheckBox = props => {
//     return (
//       <li>
//        <input key={props.id} onClick={props.handleCheck} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
//       </li>
//     )
// }


export const CheckBox = props => {
    // var currentOptions = props.cd[props.c].options;
    // var options = currentOptions.map((option) =>

    return (
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value={props.value} 
        checked={props.isChecked}
         onClick={props.handleCheck} id={props.value}></input>
        <label class="form-check-label" for="defaultCheck1">{props.value}</label>
      </div>
    )

    // return (
    //     <div class="form-check">
    //       <input class="form-check-input" type="checkbox" value={props.value} checked={props.isChecked} onClick={props.handleCheck} id="defaultCheck1"></input>
    //       <label class="form-check-label" for="defaultCheck1">{props.value}</label>
    //     </div>
    //   )
    // );
    // return (
    //   <div class="form-group">
    //     {options}
    //   </div>
    // )
  }

export default CheckBox