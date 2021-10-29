import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { User } from '../interfaces';

const UsersRest = () => {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(
    () => {
      fetch(`http://localhost:3000/api/users`)
        .then(response => response.json())
        .then(users => setUsers(users));
    }
    , []);

  return (
    <Layout title="Users | Next.js + TypeScript Example">
      <p>
        Hi There, here are the users:
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </p>
    </Layout>
  )
}

export default UsersRest
