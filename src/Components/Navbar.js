import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse" style={{backgroundColor:"#b10e81", height:100}}>
                <div className="container-fluid" style={{marginTop: 20}}>
                    <div className="navbar-header" >
                        <Link className="navbar-brand" to="/">Detection of Lumber Spine Stenosis</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar