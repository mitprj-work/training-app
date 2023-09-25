import React, { useState } from 'react';

export default function MyInputBox({ setName, name }) {
    const updateValue = (value) => {
        console.log(value);
        setName(value)
    }
    return (
        <div>
            <label>My Name :</label>
            <input type="text" id="myfirstinput" onChange={(e) => { updateValue(e.target.value) }} />
        </div>
    )
}
