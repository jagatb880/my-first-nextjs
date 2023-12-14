'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState("Anil")
  const router = useRouter();
  const apple = () => {
    setName("Jagat")
  }
  return (
    <main>
      {/* <User name="Jagat" />
      <User name="bandita" /> */}
      <h1>Event, function and state {name}</h1>
      <button onClick={() => apple()}>Click Me</button>
      <br />
      <br />
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link> <br />
      <br />
      <br />
      <br />
      <button onClick={() => router.push('/login')}>Go to Login Page</button>
      <button onClick={() => router.push('/about/aboutstudent')}>Go to About Student Page</button>
    </main>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>Next JS Home Page {props.name}</h1>
    </div>
  )
}
