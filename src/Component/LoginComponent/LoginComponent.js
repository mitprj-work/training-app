
import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'semantic-ui-react';
import { login } from "../../Service/index";

export default function LoginComponent(props) {
    const [userInfo, setUserInfo] = useState({
        userid: '', password: ''
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
        // props.getData(userInfo);
        login({ userInfo }).then((res) => {
            console.log("res", res.data.token);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userName", res.data.name);
        })
    }
    return (
        <div >
            <Card>
                <Card.Content>
                    <Form>
                        <Form.Field>
                            <label>USerId</label>
                            <Input placeholder='Address' name='userid'
                                onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <Input placeholder='Address' name='password'
                                onChange={handleChange} />
                        </Form.Field>
                        <Button onClick={handleSubmit}>Login</Button>
                    </Form>
                </Card.Content>
            </Card>


        </div >
    )
}