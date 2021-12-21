import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import Head from 'next/head'
import firebase from 'firebase/app'
import { Contact } from '../styles/containers/Contact'
import { motion } from 'framer-motion'






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

  useEffect(() => {
    getDados()
  }, [])

  async function getDados() {
    firebase.firestore().collection('mensagensTeste').get().then(result => {
      console.log(result.docs.map(doc => doc.data()))
    })
    
  }


  const handleSubmit = e => {
    enviaEmail(e)
  }

  const enviaEmail = (e) => {
    e.preventDefault()
    console.log(nome, email, mensagem)
    if(IsEmail(email) && nome.length > 0 && mensagem.length > 0){
      console.log('valido')
    }else if(nome.length < 1){
      alert('Insira um nome!')
    }else if(mensagem.length < 1){
      alert('Insira uma mensagem!')
    }else {
      alert('Insira um e-mail válido!')
    }
  }

  const IsEmail = emailParametro =>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(emailParametro)
  }

  // const onChangeCaptcha = value => {
  //   console.log("Captcha value:", value);
  // }

  return (
    <Base>
      <Head>
        <title>Contato - Xalo Dev</title>
      </Head>
      <Contact>
        <div className='content'>
          <h2>Olá, vamos falar sobre o seu projeto!</h2>
          <motion.form
            initial="hidden"
            animate="show"
            variants={container}
            onSubmit={handleSubmit}
          >
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
              onClick={enviaEmail}
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
        </div>
      </Contact>
    </Base>
  )
}

export default Contato
