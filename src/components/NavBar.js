import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {

    return (

        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/home" onClick={() => props.onAnsweredSelected()}
                    >
                        Answered
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/home" onClick={() => props.onUnansweredSelected()}>
                        Unanswered
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard">
                        Leaderboard
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={() => props.onLogOutSelected()}>
                        {props.user} - LogOut
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

const mapStateToProps = state => {
    return { user: state.users[state.authedUser].name }
}

export default connect(mapStateToProps)(NavBar)