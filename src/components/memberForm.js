import React, { useState } from 'react';

function TeamForm(props){
    const [teamate, setTeamate] = useState({
        name:'',
        title:'',
        email:'',
        descrip:'',
    })

    console.log(teamate)

    const formInput = (e) => {
        setTeamate({
            ...teamate,
        [e.target.id]: e.target.value
        });
    }

    const submitEffect = (e) => {
        debugger
        e.preventDefault();
        props.addMember(teamate);
        setTeamate({
            name:'',
            title:'',
            email:'',
            descrip:'',
        });
    };

    return(
        <div className='form'>
            <form onSubmit= {submitEffect}>

                <label>Name</label>
                <input
                    id='name'
                    type='text'
                    placeholder='Name'
                    onChange={formInput}
                    value={teamate.name}
                />

                <label>Title</label>
                <input
                    id='title'
                    type='text'
                    placeholder='title'
                    onChange={formInput}
                    value={teamate.title}
                />

                <label>Email</label>
                <input
                    id='email'
                    type='email'
                    placeholder='example123@email.com'
                    onChange={formInput}
                    value={teamate.email}
                />

                {/* <label>Date Joined</label>
                <input
                /> */}

                <label>Description</label>
                <textarea
                    id='descrip'
                    type='text'
                    placeholder='Contributrtions'
                    onChange={formInput}
                    value={teamate.descrip}
                />

                <button type='submit'>Submit</button>
                
            </form>
        </div>
    );
};

export default TeamForm;
