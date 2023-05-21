'use client'
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="overflow-y-auto">
      <main className="flex-1 flex flex-col w-full max-w-2xl mx-auto p-3 gap-3 overflow-y-auto">
        <section>
          <h2 className="text-2xl underline font-medium">Sobre</h2>
          <div className="flex gap-2">
            <p className="text-justify flex items-center font-medium text-zinc-400">
              Olá, eu sou o Ícaro, um Engenheiro de Software Front-end,
              apaixonado por tecnologia e pelo que eu faço.
              Fevereiro de 2021, tive minha primeira oportunidade de trabalhar
              para uma empresa no ramo, desde então nunca parei, sempre trabalhando,
              estudando e me aprimorando na Área.
            </p>
            <Image src="https://github.com/icaroxavier.png" alt="Ícaro Xavier" width={110} height={110} className="rounded-full"/>
          </div>
        </section>
        <section>
          <h2 className="text-2xl underline font-medium">Bio</h2>
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
          <h2 className="text-2xl underline font-medium mb-1">Hobbies</h2>
          <p className="text-justify flex items-center font-medium text-zinc-400">
            No meu tempo livre, provavelmente me encontrará jogando algum jogo,
            passeando com meu cachorro, estudando novidades da área,
            passeando de carro rumo a algum lugar novo ou
            assistindo alguma uma série, louco pra descobrir o que acontece.
            Isso é, se eu não tiver descobrido algum assunto que me interesse recentemente,
            porque eu só paro quando devorar tudo.
          </p>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl underline font-medium mb-1">Projetos Pessoais</h2>
          <div>

          </div>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl underline font-medium mb-1">Contatos</h2>
          <div className="flex flex-col gap-2">
            <p className="text-zinc-400">
              <span className="text-zinc-300 font-bold underline">Email</span>
              : icarogabriel999@icloud.com</p>
            <p className="text-zinc-400">
              <span className="text-zinc-300 font-bold underline">Telefone:</span>
              : +55 {'(85)'} 99816-4001</p>
          </div>
        </section>
      </main>
      </div>
      <footer className="h-20 pt-2 bg-zinc-800 flex flex-col items-center justify-between shadow-lg -top-2 shadow-zinc-50">
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
  )
}
