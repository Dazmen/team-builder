import React, { useState } from 'react'



const TeamList = (props) => {

  return(
    <div className='theTeam'>

      {props.team.map(member => (
        <div className='memberInfo' key={member.id}>
          <h2>{member.name}</h2>
          <h3>{member.title}</h3>
          <h5>{member.email}</h5>
          <p>{member.descrip}</p>
        </div>
      ))}

    </div>
  );
};

export default TeamList