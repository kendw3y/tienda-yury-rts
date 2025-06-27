import React from 'react'
import {ConfirModal} from "./ConfirModal"
type Props = {
    isOpen:boolean
}

export const DeletUser = (props: Props) => {
  return (
    <ConfirModal isOpen={props.isOpen} ></ConfirModal>
  )
}