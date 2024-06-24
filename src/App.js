import React, { useState } from 'react';
import UserTable from './table/UserTable';
import './App.css'; // Import the CSS file
import { AddUserForm } from './Forms/AddUserForm';
import { EditUserForm } from './Forms/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'arun', username: 'arunak' },
    { id: 2, name: 'saran', username: 'saransb' },
    { id: 3, name: 'kisore', username: 'kishak' },
  ];

  const [users, setUsers] = useState(usersData);

  // Add user
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // Delete user by id
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);//delete pannina athu again updte form la vara kudathu athuku tha false 
  };

  // Update process
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username:user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="app-container">
      <h1>CRUD App</h1>
      <div className="add-user-section">
      <div>
        {editing ? (
          <div>
            <h2>Edit User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add Users</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
      </div>
      <div className="view-users-section">
        <h2>View Users</h2>
        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
      </div>
    </div>
  );
};

export default App;
