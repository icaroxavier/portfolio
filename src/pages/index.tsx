'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo, ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

interface Project {
  name: string
  description: string
  imagePath: string
  link?: string
}

const projects: Project[] = [
  {
    name: 'madeireira-geovane',
    description: 'Uma landing page para a geração de leads desenvolvida inteiramente por mim em um Job como Freelancer.',
    imagePath: '/madeireira-geovane.png',
  },
  {
    name: 'better-date-functions',
    description: 'Minha primeira library em JavaScript para ajudar no desenvolvimento de sistemas que manipulam datas, tendo várias funções prontas para conseguir detalhes sobre os dias, meses e anos.',
    imagePath: '/better-date-functions.png',
    link: 'https://github.com/icaroxavier/better-date-functions'
  },
  {
    name: 'reminder-task-manager',
    description: "Meu primeiro projeto em React, que foi o desafio que recebi para conseguir o meu estágio, se trata de um Kanban-like com drag'n'drop sincrozido com o firebase e com autenticação também, foi bem desafiador, mas me provou que com bastante pesquisa conseguimos tudo.",
    imagePath: '/reminder.jpg',
    link: 'https://github.com/icaroxavier/reminder-task-manager'
  },
  {
    name: 'moRANGO',
    description: 'Esse projeto se trata de um aplicativo em Flutter, que tem a finalidade de procurar receitas com todos os ingrediente que você já possui em casa ou pretende comprar. Fiz o mesmo com meus colegas da faculdade em um projeto da cadeira de Programação orientada a objetos.',
    imagePath: '/morango.png',
    link: 'https://github.com/icaroxavier/moRANGO'
  },
  {
    name: 'teste-omie',
    description: 'Esse foi o projeto que desenvolvi para o processo seletivo na Omie, na qual fui aprovado. Utilizei para o front-end o framework Angular e desenvolvi um back-end com o Spring Boot (JAVA).',
    imagePath: '/teste-omie.png',
    link: 'https://github.com/icaroxavier/teste-omie'
  },
  {
    name: 'portfolio',
    description: 'Esse é o meu portfólio, desenvolvido com Next.js e TailwindCSS, com o objetivo de mostrar um pouco do meu trabalho e das minhas habilidades.',
    imagePath: '/portfolio.png',
    link: 'https://github.com/icaroxavier/portfolio'
  }

]

export default function Home() {

  const [activeProject, setActiveProject] = useState<number>(0)
  const { name, description, imagePath, link } = projects[activeProject]

  const handleClickNextProject = () => {
    setActiveProject(state => {
      if (state + 1 === projects.length) {
        return 0
      }
      return state + 1
    })
  }

  const handleClickPreviousProject = () => {
    setActiveProject(state => {
      if (state - 1 === -1) {
        return projects.length - 1
      }
      return state - 1
    })
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="h-screen flex flex-col">
        <div className="overflow-y-auto">
        <main className="flex-1 flex flex-col w-full max-w-2xl mx-auto p-3 gap-8 overflow-y-auto">
          <section>
            <h2 className="text-2xl font-medium">Sobre</h2>
            <div className="flex gap-2 w-full">
              <p className="block font-medium text-zinc-400">
                <Image src="https://github.com/icaroxavier.png" alt="Ícaro Xavier" width={105} height={105} className="rounded-full float-right m-1" priority />
                Olá, eu sou o Ícaro, um Engenheiro de Software Front-end,
                apaixonado por tecnologia e pelo que eu faço.
                Fevereiro de 2021, tive minha primeira oportunidade de trabalhar
                para uma empresa no ramo, desde então nunca parei, sempre trabalhando,
                estudando e me aprimorando na Área.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium">Bio</h2>
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 border-b-zinc-200 border-b mt-2">
                <span className="text-zinc-300 font-bold">06/2001</span>
                <span className="text-zinc-400">Nasci em Fortaleza - Ceará, Brasil.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">02/2021</span>
                <span className="text-zinc-400">Comecei o meu primeiro emprego na área como estagiário na RAV Tecnologia</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">07/2021</span>
                <span className="text-zinc-400">Entrei para o projeto Colono da EMBRAPII e do Polo de Inovação do IFCE.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">09/2021</span>
                <span className="text-zinc-400">Concluí o estágio na RAV Tecnologia.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">10/2021</span>
                <span className="text-zinc-400">Comecei a trabalhar na Certare Engenharia & Consultoria.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">04/2022</span>
                <span className="text-zinc-400">Concluí o projeto Colono da EMBRAPII e do Polo de Inovação do IFCE.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">04/2022</span>
                <span className="text-zinc-400">Comecei a trabalhar na Omie, dentro da G-click.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">03/2023</span>
                <span className="text-zinc-400">Finalizei minha colaboração na Omie para aceitar outra oportunidade.</span>
              </p>
              <p className="flex gap-2 border-b-zinc-200 border-b mt-1">
                <span className="text-zinc-300 font-bold">03/2023</span>
                <span className="text-zinc-400">Comecei a trabalhar na Soluevo, empresa de consultoria, atuando na NowCM.</span>
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-medium mb-1">Hobbies</h2>
            <p className="text-justify flex items-center font-medium text-zinc-400">
              No meu tempo livre, provavelmente me encontrará jogando algum jogo,
              passeando com meu cachorro, estudando novidades da área,
              passeando de carro rumo a algum lugar novo ou
              assistindo alguma uma série, louco pra descobrir o que acontece.
              Isso é, se eu não tiver descobrido algum assunto que me interesse recentemente,
              porque eu só paro quando devorar tudo.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium">Projetos Pessoais</h2>
            <div className="flex flex-col gap-2 w-full mb-2">
              <Link
                className={`text-lg mx-auto font-bold ${link ? 'underline text-blue-600 hover:text-blue-800 visited:text-purple-600' : 'text-zinc-300'}`}
                href={link || ''}
                target={link ? '_blank' : '_self'}
              >
                {name}
              </Link>
              <div className="relative h-96 w-full bg-zinc-800 rounded-lg">
                <Image src={imagePath} alt="" fill className="object-contain"/>
              </div>
              <p className="text-zinc-400 text-justify h-full" style={{minHeight: '6rem'}}>{description}</p>
            </div>
            <div className="flex gap-2 mx-auto ">
              <ArrowLeft size={20} className="cursor-pointer hover:scale-110 transition-all" onClick={handleClickPreviousProject}/>
              {projects.map((project, index) => {
                return <div
                  onClick={() => setActiveProject(index)}
                  key={`ball-${project.name}`}
                  className={`h-5 w-5 rounded-full cursor-pointer hover:scale-110 transition-all ${activeProject === index ? 'bg-zinc-50' : 'bg-zinc-700'}`}
                />
              })}
              <ArrowRight size={20} className="cursor-pointer hover:scale-110 transition-all" onClick={handleClickNextProject}/>
            </div>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-medium mb-1">Contatos</h2>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-400">
                <span className="text-zinc-300 font-bold ">Email</span>
                : icarogabriel999@icloud.com</p>
              <p className="text-zinc-400">
                <span className="text-zinc-300 font-bold ">Telefone:</span>
                : +55 {'(85)'} 99816-4001</p>
            </div>
          </section>
        </main>
        </div>
        <footer className="h-20 pt-2 bg-zinc-800 flex flex-col items-center justify-between shadow-md -top-2 shadow-zinc-50">
          <div className="flex gap-3">
            <Link href='https://www.linkedin.com/in/icaroxavier/' target="_blank">
              <LinkedinLogo size={40} className="cursor-pointer hover:scale-110 transition-all"/>
            </Link>
            <Link href='https://www.github.com/icaroxavier' target="_blank">
              <GithubLogo size={40} className="cursor-pointer hover:scale-110 transition-all"/>
            </Link>
            <Link href='https://wa.me/5585998164001?text=Oi,%20tudo%20bem?' target="_blank">
              <WhatsappLogo size={40} className="cursor-pointer hover:scale-110 transition-all"/>
            </Link>
          </div>
          <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} Xalo Dev. Todos os direitos reservados.</div>
        </footer>
      </div>
    </>

  )
}
