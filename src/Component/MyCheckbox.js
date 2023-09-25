import React from 'react'

export default function MyCheckbox({ toggleIscheck, isChecked }) {
    return (
        <div>
            <input type="checkbox"
                checked={isChecked} id="mychekbox"
                onChange={() => { (toggleIscheck(!isChecked)) }}>
            </input>
            <label for='mychekbox'>Show Age</label>
        </div>
    )
}
