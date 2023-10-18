import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Form, Input } from 'semantic-ui-react'
import PropTypes from "prop-types";
import './myComponent.css';
import style from './mycomponent.module.css';
import { increment, decrement, setName } from '../../Store/counterStore';
import { seveUserInfo } from "../../Service/index";
const container = { display: 'inline-block', background: 'green', width: '250px', height: '250px', marginLeft: '25px' }

export default function MyComponent(props) {
  const [userInfo, setUserInfo] = useState({
    name: '', city: '', address: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSubmit = () => {
    console.log("userInfo", userInfo);
    seveUserInfo({ userInfo }).then((res) => {
      console.log("res", res);
      props.setUpdate(!props.update)
    })
  }

  return (
    <div >
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>User</label>
              <Input placeholder='User...'
                name='name'
                onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <Input placeholder='City' name='city'
                onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <Input placeholder='Address' name='address'
                onChange={handleChange} />
            </Form.Field>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </Card.Content>
      </Card>
      <div>name:{userInfo.name}</div>
      <div>CIty: {userInfo.city}</div>
      <div>Address{userInfo.address}</div>

    </div >
  )
}