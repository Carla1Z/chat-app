import React from 'react'
import { useParams } from "react-router-dom"; 

export const Chat = () => {
    const { id } = useParams()
  return (
    <div>Chat with id { id }</div>
  )
}