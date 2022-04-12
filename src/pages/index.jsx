import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import BaseLayout from '../components/base-layout'
import {MainContentContainer, SelectorContainer, SelectorArrow, SelectorBall} from '../styles/containers/main-content.style'
import VoxelDogLoader from '../components/voxel-dog-loader'
import { motion } from 'framer-motion'
import Section from '../components/section'
import { BioSection, BioYear, BioDescription } from '../components/bio'
import Paragraph from '../components/paragraph'
import { Heading, Image } from '@chakra-ui/react'
import Project from '../components/project'
import Link from 'next/link'

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

const projects = [
  <Project
      key={0}
      imagePath='/better-date-functions.png'
      title='better-date-functions'
      description="Minha primeira library em JavaScript para ajudar 
      no desenvolvimento de sistemas que manipulam datas, tendo 
      várias funções prontas para conseguir detalhes sobre os dias, 
      meses e anos."
      link='https://github.com/XaloDev/better-date-functions'
      padding='79%'
  />,
  <Project
      key={1}
      imagePath='/reminder.jpg'
      title='reminder-task-manager'
      description="Meu primeiro projeto em React, que foi o desafio 
      que recebi para conseguir o meu estágio,
        se trata de um Kanban-like com drag'n'drop sincrozido com o 
        firebase e com autenticação também,
        foi bem desafiador, mas me provou que com bastante pesquisa 
        conseguimos tudo."
      link='https://github.com/XaloDev/reminder-task-manager'
      padding='100%'
  />,
  <Project
      key={2}
      imagePath='/morango.png'
      title='moRANGO'
      description="Esse projeto se trata de um aplicativo em Flutter, 
      que tem a finalidade de procurar receitas com todos
      os ingrediente que você já possui em casa ou pretende comprar. 
      Fiz o mesmo com meus colegas da faculdade em um projeto
      da cadeira de Programação orientada a objetos."
      link='https://github.com/XaloDev/moRANGO'
      padding='178%'
  />,
  <Project
      key={3}
      imagePath='/workshop-springboot2-jpa.png'
      title='workshop-springboot2-jpa'
      description="Esse projeto se trata de um CRUD feito com o Spring Boot 
      baseado no sistema de um supermercado online, com
      a finalidade de firmar ainda mais minhas habilidades em Java e Spring."
      link='https://github.com/XaloDev/workshop-springboot2-jpa'
      padding='71%'
  />,
  <Project
    key={4}
    imagePath='/teste-omie.png'
    title='teste-omie'
    description='Esse foi o projeto que desenvolvi para o processo seletivo 
    na Omie, na qual fui aprovado. Utilizei para o front-end
    o framework Angular e desenvolvi um back-end com o Spring Boot (JAVA).'
    link='https://github.com/XaloDev/teste-omie'
    padding='35%'  
  />,
  <Project
      key={5}
      imagePath='/portfolio.png'
      title='Portfólio online'
      description="O projeto do website que você está acessando agora, 
      desenvolvido inteiramente por mim em Next.js, com Firebase."
      link='https://github.com/XaloDev/portfolio'
      padding='115%'
  />
]

const Home = () => {

  const [selectedProject, setSelectedProject] = useState(0)

  function renderSelectedProject(){
    return projects[selectedProject]
  }

  const Selector = () => (
    <SelectorContainer>
      <SelectorArrow
          className={'no-select'}
          onClick={ignore => selectedProject > 0 && setSelectedProject(selectedProject - 1)}
      >
        {'<'}
      </SelectorArrow>
      {projects.map((project, index) => {
        return (
            <SelectorBall
                onClick={ignore => setSelectedProject(index)}
                selected={project.key === selectedProject.toString()}
                key={project.key}
                className={'no-select'}
            />
        )
      })}
      <SelectorArrow
          className={'no-select'}
          onClick={ignore => selectedProject < (projects.length - 1) && setSelectedProject(selectedProject + 1)}
      >
        {'>'}
      </SelectorArrow>
    </SelectorContainer>
  )

  return (
    <BaseLayout>
      <Head>
        <title>Home - Xalo Dev</title>
      </Head>
      <MainContentContainer>
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
          <div className='aboutDiv'>
            <Paragraph>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              maxHeight="100px"
              align='right'
              display="inline-block"
              borderRadius="full"
              src="/me.jpg"
              alt="Profile image"
            />
              Xalo Dev, ou se preferir, Ícaro, sou um estudante de
              Engenharia de Computação que acabou descobrindo a paixão pela programação
              em sua primeira cadeira da faculdade, desde então, venho me aprimorando
              nessa atividade que costumeiramente chamo de Arte. Fevereiro de 2021, tive minha
              primeira oportunidade de trabalhar para uma empresa, desde então nunca
              mais parei, sempre trabalhando e cada vez mais me conectando, me apaixonando 
              e me aprimorando no meio.
            </Paragraph>
            
          </div>
          
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
          <BioDescription>Comecei estágio na RAV Tecnologia.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>07/2021</BioYear>
          <BioDescription>Entrei para o projeto Colono da EMBRAPII e do Polo de Inovação do IFCE.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>09/2021</BioYear>
          <BioDescription>Concluí o estágio na RAV Tecnologia.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>10/2021</BioYear>
          <BioDescription>Comecei a trabalhar na Certare Engenharia.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>04/2022</BioYear>
          <BioDescription>Comecei a trabalhar na Omie, dentro da G-click.</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>04/2022</BioYear>
          <BioDescription>Concluí o projeto Colono da EMBRAPII e do Polo de Inovação do IFCE.</BioDescription>
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
        <Selector/>
        {renderSelectedProject()}
        <Selector/>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Informações
        </Heading>
        <Paragraph>
          Para mais informações sobre o meu trabalho como profissional da área, você pode {' '}
          <a 
            href='https://docs.google.com/document/d/1a7oAxJpBjAHajNZwD27PHtzeS7SNrYMh3J8Lwxb1NC8/edit?usp=sharing'
            target='_blank' rel="noreferrer">clicar aqui</a>{' '}
           para visualizar meu currículo e ver minha trajetória profissional, além de conhecer minhas habilidades específicas.
        </Paragraph>
        
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contato
        </Heading>
        <p style={{marginTop: '2vh'}}>
          Você pode me contatar usando próprio website,{' '}
          <Link href={'/contact'}><a>clicando aqui</a></Link>. Ou se prefir,
          
        </p>
        <p style={{marginTop: '1vh'}}>
          <u>E-mail:</u> xalodeveloper@gmail.com
        </p>
        <p style={{marginTop: '1vh'}}>
          <u>Telefone:</u> (85) 9 9816-4001
        </p>
        <p style={{marginTop: '1vh'}}>
          <a href={'https://wa.me/5585998164001?text=Oi,%20tudo%20bem?'} target='_blank' rel="noreferrer">Whatsapp</a>
        </p>
        <p style={{marginTop: '1vh'}}>
          <a
            href={'https://www.linkedin.com/in/%C3%ADcaro-gabriel-67148b1ba/'}
            target='_blank'
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        
      </Section>
      


      </div>
      
      </MainContentContainer>
    </BaseLayout>
  )
}

export default Home
