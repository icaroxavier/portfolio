import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export function About() {
  const { t } = useTranslation('home')

  return (
    <section className="z-10">
      <h2 className="text-2xl font-medium">{t('about.title')}</h2>
      <div className="flex gap-2 w-full">
        <p className="block font-medium text-zinc-400">
          <Image src="https://github.com/icaroxavier.png" alt="Ícaro Xavier" width={105} height={105} className="rounded-full float-right m-1" priority />
          {t('about.description')}
        </p>
      </div>
    </section>
  )
}
