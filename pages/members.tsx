import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Members } from '../interfaces'

export default function MembersPage() {
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(
    () => {
      fetch(`http://localhost:3000/api/members`)
        .then(response => response.json())
        .then(members => setMembers(members));
    }
    , []);

  return (
    <Layout title="Members | Next.js + TypeScript Example">
      <h1 id="members-heading">Hi There, here are the members:</h1>
      <ul aria-labelledby="members-heading">
        {members.map(member => <li key={member.id}>{member.name}</li>)}
      </ul>
    </Layout>
  )
}
