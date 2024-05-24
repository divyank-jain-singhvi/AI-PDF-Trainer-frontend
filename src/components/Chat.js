import React from 'react'
import './Chat.css'

export default function Chat() {
  const handleSubmit = () => {
    console.log("hello")
  }
  return (
    <>
        <div className='chat-main'>
            <div className='one-chat-div'>
                <div></div>
                <div></div>
            </div>
            <div className='question-input-block'>
                <input className='question-input shadow' placeholder='Send a message...' type="text"></input>
                <button onClick={handleSubmit} className='submit-btn'>→</button>
            </div>

            </div>
  
    </>
  )
}
