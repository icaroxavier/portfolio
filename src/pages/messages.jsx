import { useEffect, useState } from 'react'
import Base from '../components/Base'
import { MessagesContainer } from '../styles/containers/Messages'
import firebase from 'firebase/app'
import MessageCard from '../components/MessageCard'



export default function MessagesPage(){

    const [password, setPassword] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
       getAllMessages()
    }, [])

    async function getAllMessages(){
        const snapshot = await firebase.firestore().collection('messages').orderBy('date', 'desc').get()
        const messagesTemp = snapshot.docs.map(doc => doc.data());
        setMessages(messagesTemp)
    }

    return(
        <Base>
            <MessagesContainer>
                {process.env.NEXT_PUBLIC_PASSWORD_TEST === password ? 
                <div className='divMessages'>
                    {messages.length && messages.map((message, index) => {
                        return <MessageCard key={index} name={message.name} email={message.email} message={message.content} date={message.date}/>
                    })}
                </div>
                : 
                <input className='passwordTeste' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                }
            </MessagesContainer>
        </Base>
    )
}