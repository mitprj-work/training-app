import React from 'react';
import { useSelector } from 'react-redux';

export default function About() {
    const { name, counter } = useSelector((state) => state.data);

    return (
        <div>
            This is About US page; name is = {name}
            <div>Counter is  {counter}</div>

        </div>
    )
}
