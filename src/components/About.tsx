import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export function About() {
  const { t } = useTranslation('home')

  return (
    <section className="z-10">
      <h2 className="text-2xl font-medium">{t('about.title')}</h2>
      <div className="flex gap-2 w-full">
        <p className="block font-medium text-zinc-500">
          <Image src="https://github.com/icaroxavier.png" alt="Ícaro Gabriel" width={105} height={105} className="rounded-full float-right m-1" priority />
          {t('about.description.0')}
          <strong className="text-zinc-800 font-bold">{t('about.description.1')}</strong>
          {t('about.description.2')}
        </p>
      </div>
    </section>
  )
}
