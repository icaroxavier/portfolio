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
      <main className="flex flex-col h-full">
        <TranslateMenu />
        <div>
          <div className="flex-1 flex flex-col w-full max-w-2xl mx-auto p-4 gap-8 overflow-y-auto relative">
            <LazyVoxelDog />
            <About />
            <Timeline />
            <Hobbies />
            <Projects />
            <Contacts />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
