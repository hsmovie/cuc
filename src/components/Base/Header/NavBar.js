import React, { Component } from 'react';
import {Link} from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <div className="navber">
                <Link to='/admin'>Admin</Link>
            </div>
        );
    }
}

export default NavBar;