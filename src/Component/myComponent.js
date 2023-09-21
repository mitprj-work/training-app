import React from 'react'

export default function MyComponent(props) {
  return (
    props.d.map((name, index) => (
      <div>
        {index === 3 ? (
          <h1>This is condition!</h1>
        ) : (
          <h1 key={name}>{name}</h1>
        )}
      </div>
    ))
  )
}
