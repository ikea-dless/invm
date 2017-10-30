// @flow
import React from "react"
import ReactDOM from "react-dom"
import docReady from "doc-ready"
import { Sample } from "components/Sample"

docReady(() => {
  const container = document.getElementById("root")
  if (container === null) return
  ReactDOM.render(<Sample />, container)
})
