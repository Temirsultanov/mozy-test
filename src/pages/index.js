import * as React from "react"

// styles
const titleStyle = {
  fontFamily: "monospace",
  color: "#333",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: 40,
}
const mozyStyle = {
  color: "#f11861",
  fontWeight: 700,
}

// markup
const IndexPage = () => {
  return (
    <h1 style={titleStyle} class="title">What the hell is <span style={mozyStyle}>mozy</span>?</h1>
  )
}

export default IndexPage
