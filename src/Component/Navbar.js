import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li> <Link to="/"> Home</Link></li>
                <li><Link to="/about/21"> Edit</Link></li>
                <li><Link to="/about"> Add</Link></li>
            </ul>

        </nav>
    )
}
