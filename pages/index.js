import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Stack, useDisclosure } from '@chakra-ui/react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Shortcuts from '../components/Shortcuts'
import AddShortcut from '../components/AddShortcut'

export default function Home() {
  const shortcutGoogle = {
    url: 'https://google.com',
    description: 'Google',
    iconUrl: "/google-icon-24x24.png"
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [shortcuts, setShortcuts] = useState([shortcutGoogle])
  return (
    <div className={styles.container}>
      <Head>
        <title>Google Shortcut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container py="20" px="0">
          <Stack spacing="10">
            <Header />
            <SearchBar />
            <Shortcuts onOpen={onOpen} shortcuts={shortcuts} />
          </Stack>
        </Container>
        <AddShortcut shortcuts={shortcuts} isOpen={isOpen} onClose={onClose} setShortcuts={setShortcuts} />
      </main>
    </div>
  )
}
