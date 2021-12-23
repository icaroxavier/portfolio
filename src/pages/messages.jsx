import { useEffect, useState } from 'react'
import BaseLayout from '../components/base-layout'
import { MessagesContainer } from '../styles/containers/messages.style'
import firebase from 'firebase/app'
import MessageCard from '../components/message-card'


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
        <BaseLayout>
            <MessagesContainer>
                {process.env.NEXT_PUBLIC_PASSWORD_TEST === password ? 
                <div className='divMessages'>
                    {messages.length > 0 && messages.map((message, index) => {
                        return <MessageCard key={index} name={message.name} email={message.email} message={message.content} date={message.date}/>
                    })}
                </div>
                : 
                <input className='passwordTeste' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                }
            </MessagesContainer>
        </BaseLayout>
    )
}