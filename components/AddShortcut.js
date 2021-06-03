import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Flex,
  Button
} from "@chakra-ui/react"
import { FormLabel, Input } from '@chakra-ui/react'
import { useFormik } from 'formik'

export default function AddShortcut ({ isOpen, onClose, shortcuts, setShortcuts }) {
  const labelStyle = {
    fontSize: 14
  }
  const modalStyle = {
    size: 'xl',
    borderRadius: '0.9rem'
  }
  // canSubmit布尔值，用来确定是否激活确定按钮
  const [ canSubmit, setCanSubmit ] = useState(false)
  const shortcut = useFormik({
    initialValues: {
      websiteName: '',
      websiteUrl: ''
    },
    onSubmit: (values) => {
      const iconUrlHost = /\/$/.test(values.websiteUrl)? `${values.websiteUrl}`: `${values.websiteUrl}/`
      setShortcuts([
        ...shortcuts,
        {
          description: values.websiteName,
          url: values.websiteUrl,
          iconUrl: `${iconUrlHost}favicon.ico` 
        }
      ])
      setTimeout(() => {
        shortcut.resetForm();
        onClose();
      })
    }
  })
  useEffect(() => {
    if (shortcut.values.websiteName && shortcut.values.websiteUrl) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  })
  return (
      <Modal {...modalStyle} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={shortcut.handleSubmit}>
            <ModalHeader fontSize={15} fontWeight="400">添加快捷方式</ModalHeader>
            <ModalBody>
                <Stack>
                  <Stack>
                    <FormLabel htmlFor="websiteName" fontSize={14}>名称</FormLabel>
                    <Input id="websiteName" name="websiteName" value={shortcut.values.websiteName} 
                      onChange={shortcut.handleChange}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel htmlFor="websiteUrl" fontSize={14}>网址</FormLabel>
                    <Input id="websiteUrl" name="websiteUrl" value={shortcut.values.websiteUrl} 
                      onChange={shortcut.handleChange}
                    />
                  </Stack>
                </Stack>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              取消
            </Button>
            <Button type="submit" colorScheme="blue" mr={3} disabled={!canSubmit}>
              确认
            </Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
  )
}