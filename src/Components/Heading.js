import React from 'react'

export default function Heading(props) {
  return (
    <div className={`container my-3 text-center text-${props.mode === "light" ? "dark" : "light"}`}>
      <h1>News Today</h1>
      </div>
  )
}
