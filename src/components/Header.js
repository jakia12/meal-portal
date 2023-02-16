import React from 'react';
import { Link } from 'react-router-dom'
import { AuthState } from '../context/Context';

const Header = () => {
    const { user, logOut } = AuthState();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            }).catch(() => {

            })
    }

    return (
        <header>
            <div className="navbar bg-slate-200">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>

                        {
                            user?.uid ?
                                <>
                                    <span> {user.displayName}</span>
                                    {/* <li><Link onClick={handleLogOut} >LogOut</Link></li> */}
                                </>
                                :
                                <>

                                </>
                        }

                        <li><Link to="/login">Login</Link></li> <li><Link to="/register">Register</Link></li>
                        <li>
                            {user?.uid ? user.email : ''}
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
