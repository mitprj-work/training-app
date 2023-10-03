import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import './myComponent.css';
import style from './mycomponent.module.css';
import { increment, decrement, setName } from '../../Store/counterStore';
const container = { display: 'inline-block', background: 'green', width: '250px', height: '250px', marginLeft: '25px' }

export default function MyComponent() {
  const dispatch = useDispatch();
  const { counter, name } = useSelector((state) => state.data);
  const { userCounter, userName } = useSelector((state) => state.user);
  const updateName = (value) => {
    dispatch(setName({ name: value, age: 15, gender: "Male" }))
  }

  return (
    <div >
      <div>Counter value is {counter} {'   '}  {name}</div>
      <div>User Counter value is {userCounter} {'   '} {userName}</div >
      <div>
        <button onClick={() => { dispatch(increment()) }}> +++</button>
        <button onClick={() => { dispatch(decrement()) }}> --- </button>
        <input type="text" onChange={(e) => { updateName(e.target.value) }}></input>
      </div>
    </div >
  )
}