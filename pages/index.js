import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Homepage from '../src/components/Landingpage';

export default function Home() {
  return (
    <div>
      <Homepage className='App' />
    </div>
  )
}
