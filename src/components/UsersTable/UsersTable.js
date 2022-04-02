import React from 'react';
import UserRecord from './UserRecord';
import { Table } from 'react-bootstrap';
const UsersTable = (props) => {
  const {users} = props;
    return (
    <Table striped bordered hover>
    <thead  className='text-warning' style={{backgroundColor:"blue"}}>
      <tr className="bg-light p-3 m-3"  style={{width: '25%', height : '60px' }}>
        <th style={{width: '10%'}}>id</th>
        <th style={{width: '40%'}}>name</th>
        <th style={{width: '20%'}}>Email</th>
        <th style={{width: '30%'}}> Actions</th>
      </tr >
      {users.map(user => <UserRecord key={user.id} id={user.id} username={user.username} email={user.email}/>)}
    </thead>
    <tbody>
      
    </tbody>
  </Table>)
}

export default UsersTable;