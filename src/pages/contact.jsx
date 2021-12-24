import React, { useState } from 'react'
import BaseLayout from '../components/base-layout'
import Head from 'next/head'
import firebase from 'firebase/app'
import { Contact } from '../styles/containers/contact.style'
import { motion } from 'framer-motion'
import { useAlert } from 'react-alert'



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}



const Contato = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const customAlert = useAlert()

  function handleAlert(message){
    customAlert.show(<div style={{ color:'#e1e1e6', font: '500 16px Roboto, sans-serif', padding: '5% 2%'}}>{message}</div>)
  }

  const handleSubmit = e => {
    enviaMensagem(e)
  }

   function enviaMensagem(e){
    e.preventDefault()
    
    if(IsEmail(email) && nome.length > 0 && mensagem.length > 0){
      firebase.firestore().collection('messages').add({
        name: nome,
        email,
        content: mensagem,
        date: new Date()
      })
      .then(docRef => {
        handleAlert('Mensagem enviada!')
      }).catch(error => {
        handleAlert('Ocorreu um erro ao enviar sua mensagem')
      })
      setNome('')
      setEmail('')
      setMensagem('')
    }else if(nome.length < 1){
      handleAlert('Insira um nome!')
    }else if(mensagem.length < 1){
      handleAlert('Insira uma mensagem!')
    }else {
      handleAlert('Insira um e-mail válido!')
    }
  }

  const IsEmail = emailParametro =>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(emailParametro)
  }

  return (
    <BaseLayout>
      <Head>
        <title>Contato - Xalo Dev</title>
      </Head>
      <Contact>
        <motion.div 
          className='content'  
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h2 variants={item}>Olá, vamos falar sobre o seu projeto!</motion.h2>
          <motion.p variants={item}>{'/*'} Caso você prefira entrar em contato por email, envie sua mensagem para  <u>xalodeveloper@gmail.com</u> {'*/'}</motion.p>
          <motion.form onSubmit={handleSubmit}>
            <motion.label variants={item} htmlFor='nome'>Seu nome</motion.label>
            <motion.input variants={item} type='text' id='nome' name='nome' value={nome} onChange={e => setNome(e.target.value)}/>
            <motion.label variants={item} htmlFor='email'>Seu email</motion.label>
            <motion.input variants={item} type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <motion.label variants={item} htmlFor='mensagem'>Sua mensagem</motion.label>
            <motion.textarea variants={item} type='text' id='mensagem' name='mensagem' rows="5" cols="50" value={mensagem} onChange={e => setMensagem(e.target.value)}/>
            <input style={{display: 'none'}} id='submitInput' type="submit" value="Enviar"/>
            {/* <ReCAPTCHA
              sitekey="6LfD2bsdAAAAAKcCu9ZgGvTCriS7G75hR_H1Ctml"
              onChange={onChangeCaptcha}
            /> */}
            <motion.button 
              onClick={enviaMensagem}
              variants={item}
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.1,
                transition: {
                  duration: 0.2
                }
              }}
            >
              Enviar
            </motion.button>
          </motion.form>
        </motion.div>
      </Contact>
    </BaseLayout>
  )
}

export default Contato
