import React from 'react'
import { Flex, useDisclosure, Box, Image } from '@chakra-ui/react'
import Shortcut from './shortcut'
import AddShortcut from './AddShortcut'

export default function Shortcuts ({ onOpen, shortcuts }) {

  return (
    <Flex justifyContent="flex-start" maxW="100%" px="20px" flexWrap="wrap">
      {
        shortcuts.map((cut, index) => {
          return (
            <Shortcut key={index} url={cut.url} description={cut.description} iconUrl={cut.iconUrl? cut.iconUrl: ''} />
          )
        })
      }
      <Shortcut isAdd={true} onOpen={onOpen} />
    </Flex>
  )
}