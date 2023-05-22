'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, WhatsappLogo, ArrowLeft, ArrowRight, Translate } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import dynamic from "next/dynamic";
import VoxelDogLoader from '@portfolio/components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('@portfolio/components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

interface Project {
  name: string
  imagePath: string
  link?: string
}

const projects: Project[] = [
  {
    name: 'madeireira-geovane',
    imagePath: '/madeireira-geovane.png',
  },
  {
    name: 'better-date-functions',
    imagePath: '/better-date-functions.png',
    link: 'https://github.com/icaroxavier/better-date-functions'
  },
  {
    name: 'reminder-task-manager',
    imagePath: '/reminder.jpg',
    link: 'https://github.com/icaroxavier/reminder-task-manager'
  },
  {
    name: 'moRANGO',
    imagePath: '/morango.png',
    link: 'https://github.com/icaroxavier/moRANGO'
  },
  {
    name: 'teste-omie',
    imagePath: '/teste-omie.png',
    link: 'https://github.com/icaroxavier/teste-omie'
  },
  {
    name: 'portfolio',
    imagePath: '/portfolio.png',
    link: 'https://github.com/icaroxavier/portfolio'
  }

]

export default function Home() {

  const [activeProject, setActiveProject] = useState<number>(0)
  const [isTranslateMenuOpen, setIsTranslateMenuOpen] = useState<boolean>(false)
  const { t, lang } = useTranslation('home')
  const { name, link } = projects[activeProject]

  const images = projects.map(project => {
    return (
      <Image
        key={project.name}
        src={project.imagePath}
        className="object-contain"
        sizes="100%"
        alt=""
        fill
        placeholder="blur"
        blurDataURL={'/blur.png'}
      />
    )
  })

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

  const handleCloseTranslateMenu = () => setIsTranslateMenuOpen(false)
  const toggleTranslateMenu = () => setIsTranslateMenuOpen(state => !state)

  const handleChangeLanguage = (langParam: string) => {
    setLanguage(langParam)
    localStorage.setItem('@icaroxavier/portfolio:lang', langParam)
    handleCloseTranslateMenu()
  }

  useEffect(() => {
    const localStorageLang = localStorage.getItem('@icaroxavier/portfolio:lang')
    if (localStorageLang === 'en') {
      setLanguage('en')
    }
    if (localStorageLang === 'pt') {
      setLanguage('pt')
    }
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="h-screen flex flex-col">
        <Translate
          size={48}
          onClick={toggleTranslateMenu}
          className="fixed z-30 right-4 md:right-8 top-2 md:top-4 bg-blue-700 p-2 rounded-full cursor-pointer hover:scale-110 transition-all"
        />
        <div
          className={`fixed z-30 right-4 md:right-8 top-16 md:top-20 bg-zinc-800 ${isTranslateMenuOpen ? 'scale-100' : 'scale-0'} transition-all p-2 rounded-md flex flex-col gap-2`}
        >
          <button
            onClick={() => lang !== 'en' && handleChangeLanguage('en')}
            className={`${lang === 'en' ? 'bg-blue-700' : 'bg-zinc-900'} rounded-md p-2 hover:scale-105 hover:bg-blue-900 transition-all`}
          >
            English
          </button>
          <button
            onClick={() => lang !== 'pt' && handleChangeLanguage('pt')}
            className={`${lang === 'pt' ? 'bg-blue-700' : 'bg-zinc-900'} rounded-md p-2 hover:scale-105 hover:bg-blue-900 transition-all`}
          >
            Português
          </button>
        </div>
        {isTranslateMenuOpen && (
          <div className="fixed z-20 h-screen w-screen" onClick={handleCloseTranslateMenu}/>
        )}
        <main className="overflow-y-auto">
          <div className="flex-1 flex flex-col w-full max-w-2xl mx-auto p-4 gap-8 overflow-y-auto relative">
            <LazyVoxelDog />
            <section className="z-10">
              <h2 className="text-2xl font-medium">{t('about.title')}</h2>
              <div className="flex gap-2 w-full">
                <p className="block font-medium text-zinc-400">
                  <Image src="https://github.com/icaroxavier.png" alt="Ícaro Xavier" width={105} height={105} className="rounded-full float-right m-1" priority />
                  {t('about.description')}
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-medium">{t('bio.title')}</h2>
              <div className="flex flex-col">
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative mt-2">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">06/2001</span>
                  <span className="text-zinc-400">{t('bio.06/2001')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">02/2021</span>
                  <span className="text-zinc-400">{t('bio.02/2021')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">07/2021</span>
                  <span className="text-zinc-400">{t('bio.07/2021')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">09/2021</span>
                  <span className="text-zinc-400">{t('bio.09/2021')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">10/2021</span>
                  <span className="text-zinc-400">{t('bio.10/2021')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">04/2022</span>
                  <span className="text-zinc-400">{t('bio.04/2022-1')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">04/2022</span>
                  <span className="text-zinc-400">{t('bio.04/2022-2')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">03/2023</span>
                  <span className="text-zinc-400">{t('bio.03/2023-1')}</span>
                </p>
                <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
                  <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
                  <span className="text-zinc-300 font-bold">03/2023</span>
                  <span className="text-zinc-400">{t('bio.03/2023-2')}</span>
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-medium mb-1">{t('hobbies.title')}</h2>
              <p className="text-justify flex items-center font-medium text-zinc-400">
                {t('hobbies.description')}
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium">{t('projects.title')}</h2>
              <div className="flex flex-col gap-2 w-full mb-2">
                <Link
                  className={`text-lg mx-auto font-bold ${link ? 'underline text-blue-600 hover:text-blue-800' : 'text-zinc-300'}`}
                  href={link || ''}
                  target={link ? '_blank' : '_self'}
                >
                  {name}
                </Link>
                <div className="relative h-96 w-full bg-zinc-950 rounded-lg">
                  {images[activeProject]}
                  <div className="flex gap-2 mx-auto absolute bottom-1 left-1/2 -translate-x-1/2 bg-zinc-800 rounded-md p-1">
                    <ArrowLeft size={20} className="cursor-pointer hover:scale-110 transition-all" onClick={handleClickPreviousProject}/>
                    {projects.map((project, index) => {
                      return <div
                        onClick={() => setActiveProject(index)}
                        key={`ball-${project.name}`}
                        className={`h-5 w-5 rounded-full cursor-pointer hover:scale-110 transition-all ${activeProject === index ? 'bg-zinc-50' : 'bg-zinc-600'}`}
                      />
                    })}
                    <ArrowRight size={20} className="cursor-pointer hover:scale-110 transition-all" onClick={handleClickNextProject}/>
                  </div>
                </div>
                <p className="text-zinc-400 text-justify h-full" style={{minHeight: '6rem'}}>{t(`projects.${name}.description`)}</p>
              </div>

            </section>
            <section className="mb-4">
              <h2 className="text-2xl font-medium mb-1">{t('contacts.title')}</h2>
              <div className="flex flex-col gap-2">
                <p className="text-zinc-400">
                  <span className="text-zinc-300 font-bold ">Email</span>
                  : icarogabriel999@icloud.com</p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300 font-bold ">{t('contacts.phone')}:</span>
                  : +55 {'(85)'} 99816-4001</p>
              </div>
            </section>
          </div>
        </main>
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
          <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} {t('footer.copyright')}</div>
        </footer>
      </div>
    </>

  )
}
