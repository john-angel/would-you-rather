import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

class Leaderboard extends Component{

  render(){
    return(
      <ul>
        {
          this.props.users.map(user => (
			<li key={user.id}>
                <img
                    src={user.avatarURL}
                    alt={user.name}
                    className='avatar'
                  />
                 <p>{user.name}</p>
				 <p>Questions: {user.questions.length}</p>
				 <p>Answers: {Object.keys(user.answers).length}</p>
             </li>
        ))}
      	   
      </ul> 
    )
  }
}

const mapStateToProps = state => {

    const users = Object.keys(state.users).map(user => state.users[user])
    users.sort((a,b) => (   
      Object.keys(b.answers).length + b.questions.length - (Object.keys(a.answers).length + a.questions.length)
    ))
  	console.log("Users:", users)    
    return {users:users}
}

export default connect(mapStateToProps)(Leaderboard);