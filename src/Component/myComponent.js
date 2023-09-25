import React from 'react';
import PropTypes from "prop-types";

export default function MyComponent({ name, age, showAge }) {

  return (
    <div>Hello {name} {showAge && `Age is ${age + 20}`}</div>
  )
}
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
