import React from "react"
import ReactDOM from "react-dom"
import docReady from "doc-ready"
import { Sample } from "components/Sample"

docReady(() => {
  ReactDOM.render(<Sample />, document.getElementById("root"))
})
