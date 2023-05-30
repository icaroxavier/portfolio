import useTranslation from "next-translate/useTranslation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "phosphor-react"
import { useState } from "react"

interface Project {
  name: string
  imagePath: string
  link?: string
}

const projects: Project[] = [
  {
    name: 'smart-recipe',
    imagePath: '/smart-recipe.png',
  },
  {
    name: 'madeireira-geovane',
    imagePath: '/madeireira-geovane.png',
  },
  // {
  //   name: 'better-date-functions',
  //   imagePath: '/better-date-functions.png',
  //   link: 'https://github.com/icaroxavier/better-date-functions'
  // },
  {
    name: 'teste-omie',
    imagePath: '/teste-omie.png',
    link: 'https://github.com/icaroxavier/teste-omie'
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
    name: 'portfolio',
    imagePath: '/portfolio.png',
    link: 'https://github.com/icaroxavier/portfolio'
  }
]

export function Projects() {
  const { t } = useTranslation('home')
  const [activeProject, setActiveProject] = useState<number>(0)

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

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-medium">{t('projects.title')}</h2>
      <div className="flex flex-col gap-2 w-full mb-2">
        <Link
          className={`text-lg mx-auto font-bold ${link ? 'underline text-blue-600 hover:text-blue-800' : 'text-zinc-600'}`}
          href={link || ''}
          target={link ? '_blank' : '_self'}
        >
          {name}
        </Link>
        <div className="relative h-96 w-full bg-zinc-400 rounded-lg">
          {images[activeProject]}
          <div className="flex gap-2 mx-auto absolute bottom-1 left-1/2 -translate-x-1/2 bg-zinc-600 rounded-md p-1">
            <ArrowLeft size={20} className="cursor-pointer hover:scale-110 transition-all text-zinc-50" onClick={handleClickPreviousProject}/>
            {projects.map((project, index) => {
              return <div
                onClick={() => setActiveProject(index)}
                key={`ball-${project.name}`}
                className={`h-5 w-5 rounded-full cursor-pointer hover:scale-110 transition-all ${activeProject === index ? 'bg-zinc-50' : 'bg-zinc-400'}`}
              />
            })}
            <ArrowRight size={20} className="cursor-pointer hover:scale-110 transition-all text-zinc-50" onClick={handleClickNextProject}/>
          </div>
        </div>
        <p className="text-zinc-500 text-justify h-full" style={{minHeight: '6rem'}}>{t(`projects.${name}.description`)}</p>
      </div>

    </section>
  )
}
