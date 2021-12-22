import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Base from '../components/Base'
import { Introducao } from '../styles/containers/Introducao'
import VoxelDogLoader from '../components/voxel-dog-loader'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { BioSection, BioYear, BioDescription } from '../components/bio'
import Paragraph from '../components/paragraph'
import { Heading } from '@chakra-ui/react'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const itemH1 = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { delay: 0.3 }}
}

const itemP = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}



const Home = () => {
  return (
    <Base>
      <Head>
        <title>Home - Xalo Dev</title>
      </Head>
      <Introducao>
        <motion.div 
          className='titulo'
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.h1 variants={itemH1}>Xalo Dev</motion.h1>
          <motion.p variants={itemP}>Full-Stack Web Develeper.</motion.p>
        </motion.div>
        <LazyVoxelDog/>

        <div className="content">

        
        
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Sobre
          </Heading>
          <Paragraph>
            Xalo Dev, ou se preferir, Ícaro, sou um estudante de
            Engenharia de Computação que acabou descobrindo a paixão pela programação
            em sua primeira cadeira da faculdade, desde então, venho me aprimorando
            nessa atividade que costumeiramente chamo de Arte. Fevereiro de 2021, tive minha
            primeira oportunidade de trabalhar para uma empresa, desde então nunca
            mais parei, sempre trabalhando, me conectando e me aprimorando no meio.
          </Paragraph>
        </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>06/2001</BioYear>
          <BioDescription>Nasci em Fortaleza - Ceará, Brasil.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>02/2020</BioYear>
          <BioDescription>Entrei para o curso de Engenharia de Computação, no IFCE, campus Fortaleza.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>02/2021</BioYear>
          <BioDescription>Comecei meu primeiro estágio na RAV Tecnologia.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>07/2021</BioYear>
          <BioDescription>Entrei para um projeto do Polo Inovador no IFCE.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>09/2021</BioYear>
          <BioDescription>Concluí o estágio na RAV Tecnologia.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>10/2021</BioYear>
          <BioDescription>Comecei a trabalhar para a Inventhus(Certare).</BioDescription>
        </BioSection>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Eu ♥
        </Heading>
        <Paragraph>
          Programar, Jogar, Escutar Música, Dirigir e Viajar.
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projetos pessoais
        </Heading>
       
      </Section>
      </div>
      
      </Introducao>
    </Base>
  )
}

export default Home
