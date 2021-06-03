import React from 'react'
import { Box, Image, Stack, Text, Flex } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

export default function Shortcut ({ url, description, iconUrl, isAdd, onOpen }) {
  const shortCutStyle = {
    p: "10px",
    border: 'none',
    borderRadius: "10px"
  }
  const hoverStyle = {
    bgColor: '#ddd',
    cursor: 'pointer'
  }
  const textStyle = {
    fontSize: "13px",
    fontWeight: '500',
    h: '19px',
    w: '80px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
  const flexStyle = {
    justifyContent: 'center',
    alignItems: 'center'
  }
  function ShortCutIcon () {
    return (
        <Flex _hover={hoverStyle} as="a" href={ url }
          {...shortCutStyle} boxSize="110px" {...flexStyle}
        >
        {/* <Box>右上角</Box> */}
        <Stack spacing="10px" {...flexStyle}>
          <Flex boxSize="50px" borderRadius="25px" {...flexStyle} bgColor="#eee">
            <Image src={ iconUrl } w="24px" h="24px" margin="auto" />
          </Flex>
          <Text {...textStyle} textAlign="center">{ description }</Text>
        </Stack>
      </Flex>
    )
  }

  function Add () {
    return (
      <Flex onClick={onOpen} _hover={hoverStyle} as="a" href={ url } {...shortCutStyle} boxSize="110px" {...flexStyle}>
      {/* <Box>右上角</Box> */}
      <Stack spacing="10px" {...flexStyle}>
        <Flex boxSize="50px" borderRadius="25px" {...flexStyle} bgColor="#eee">
         <Box boxSize="16px">
          <FaPlus />
         </Box>
        </Flex>
        <Text {...textStyle} textAlign="center">添加快捷方式</Text>
      </Stack>
    </Flex>
    )
  }

  if (isAdd) {
    return <Add />
  }
  return <ShortCutIcon />
}