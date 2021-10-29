import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Members } from '../interfaces'

export default function MembersPage() {
  const [members, setMemebers] = useState<Members[]>([]);

  useEffect(
    () => {
      fetch(`http://localhost:3000/api/members`)
        .then(response => response.json())
        .then(members => setMemebers(members));
    }
    , []);

  return (
    <Layout title="Members | Next.js + TypeScript Example">
      <p>
        Hi There, here are the members:
        <ul>
          {members.map(member => <li key={member.id}>{member.name}</li>)}
        </ul>
      </p>
    </Layout>
  )
}
