import React from "react";
import {connect} from "react-redux";
import {changeColor} from "../store/actions";

const mapDispatchToProps = {
  changeColor: changeColor,
}

export default connect(null, mapDispatchToProps)(({ changeColor }) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          USERS.
        </p>

        <button onClick={changeColor}>CHANGE COLOR</button>
      </header>
    </div>
  )
})
