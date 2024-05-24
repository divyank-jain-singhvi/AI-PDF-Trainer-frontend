import React,{useState} from 'react'
import axios from 'axios';
import './Chat.css'

export default function Chat() {

    const[question,setQuestion]=useState("");
    const[outputs,setoutputs]=useState("Terminal");
    const SendQuestion = async () => {
    console.log(question)
    let QuestionBlock = {
        'question':question,
        'answer': 'result',
    };
        await axios({
            method: 'post',
            url: 'http://localhost:8000/',
            data: QuestionBlock,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error("Error:", error);
        });
        const response=await axios.get('http://localhost:8000/')
        console.log(response.data)
        setoutputs(response.data)
    };
  return (
    <>
        <div className='chat-main'>
            <div className='one-chat-div'>
                <div>{outputs[Object.keys(outputs).length-1].question}</div>
                <div>{outputs[Object.keys(outputs).length-1].answer}</div>
            </div>
            <div className='question-input-block'>
                <input className='question-input shadow' placeholder='Send a message...' type="text" onChange={(e)=>setQuestion(e.target.value)} value={question} required></input>
                <button onClick={SendQuestion} className='submit-btn'>→</button>
            </div>

            </div>
  
    </>
  )
}
