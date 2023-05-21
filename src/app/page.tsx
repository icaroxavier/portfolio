'use client'
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex-1 flex flex-col  w-full max-w-3xl mx-auto p-3">
        <div>
          <h1>Sobre</h1>
          <p>Texto</p>
        </div>
      </main>
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
