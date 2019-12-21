import React, { useState } from 'react';
import TeamForm from './components/memberForm';
import TeamList from './components/teamList';

import './App.css';

function App() {
 
const [team, setTeam] = useState([]);

const addMember = (i) => {
  const newMember = {
    id: team.length,
    name: i.name,
    title: i.title,
    email: i.email,
    descrip: i.descrip
  };
  setTeam([...team, newMember]);
};

  return (
    <div className="App">
      <h1>Completely Real Team</h1>
      <div className='formCont'>
        <TeamForm addMember={addMember}/>
        <TeamList team={team}/>
      </div>
    </div>
  )
}

export default App;


    //     [ ]
    //    / | \
    //  []--[]  \  
    //          []
