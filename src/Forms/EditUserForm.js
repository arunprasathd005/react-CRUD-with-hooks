import React, { useState, useEffect } from 'react';

export const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props.currentUser]);//use Effect is used to update timley

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={
                event => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.updateUser(user.id, user);
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Update User</button>
            <button
                
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>
        </form>
    );
};
