'use client'
import Head from "next/head";
import dynamic from "next/dynamic";
import VoxelDogLoader from '@portfolio/components/VoxelDogLoader'
import { Footer } from "@portfolio/components/Footer";
import { TranslateMenu } from "@portfolio/components/TranslateMenu";
import { Projects } from "@portfolio/components/Projects";
import { Contacts } from "@portfolio/components/Contacts";
import { Hobbies } from "@portfolio/components/Hobbies";
import { About } from "@portfolio/components/About";
import { Timeline } from "@portfolio/components/Timeline";
import { Experiences } from "@portfolio/components/Experiences";

const LazyVoxelDog = dynamic(() => import('@portfolio/components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="flex flex-col h-full relative">
        <div className='flex flex-col absolute top-0 left-1/2 max-w-2xl -translate-x-1/2 w-full p-4 -z-10'>
          <h1 className="text-5xl text-zinc-700">Ícaro Xavier</h1>
          <h2 className="text-md text-zinc-500">Full-stack Developer</h2>
        </div>
        <TranslateMenu />
        <div>
          <div className="flex-1 flex flex-col w-full max-w-2xl mx-auto p-4 gap-8 overflow-y-auto relative">
            <LazyVoxelDog />
            <About />
            <Experiences />
            {/* <Timeline /> */}
            <Projects />
            <Hobbies />
            <Contacts />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
