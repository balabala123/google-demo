import React from 'react'
import { Box, InputGroup, Input, InputLeftAddon, InputRightAddon } from '@chakra-ui/react'
import { FaSearch, FaMicrophone } from 'react-icons/fa'

export default function SearchBar () {
  const iconStyle = {
    bgColor: '#fff',
    outline: 'none',
    border: 'none',
    h: '44px'
  }
  const borderRadius = "30px"
  const boxShadow = "0 2px 3px 3px rgba(0, 0, 0, 0.1);"
  return (
      <InputGroup p="5px" boxShadow={boxShadow} bgColor="#fff" borderRadius={borderRadius}
        border="1px solid rgba(223, 225, 229, 0)"
      >
        <InputLeftAddon pr="0.5rem" {...iconStyle} children={<FaSearch />} />
        <Input _focus="none" 
          placeholder="在Google上搜索，或者输入一个网址"
          _placeholder={{ color: "#666"}}
          {...iconStyle}
        />
        <InputRightAddon pl="0.5rem" {...iconStyle} children={<FaMicrophone />} />
      </InputGroup>
  )
}