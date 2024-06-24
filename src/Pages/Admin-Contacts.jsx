import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

const AdminContacts = () => {
  const { authorizationToken, user } = useAuth();
  const [contacts, setContacts] = useState([]);
  const { loading, setLoading } = useAuth();
  const Navigate = useNavigate();




  const getALLContacts = async () => {
    try {

      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json();
      setContacts(data.contacts);


    }
    catch (error) {
      console.log("cliet side error in fetchinig contact data", error)
    }

  }


  useEffect(() => {
    getALLContacts()
  }, []);

  return (
    <div>
      <h1>Admin Users Data</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>

            </tr>
          </thead>
          <tbody>


            { contacts.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.message}</td>
                </tr>

              )
             
            })}
          </tbody>


        </table>

      </div>


    </div>
  )
}

export default AdminContacts
