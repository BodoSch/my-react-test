import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"
ReactDOM.render(
    <React.Fragment>
      <Router>
        <TodoContainer />
      </Router>
    </React.Fragment>,
    document.getElementById("root")
  )