import useTranslation from "next-translate/useTranslation"

export function Timeline() {
  const { t } = useTranslation('home')

  return (
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
  )
}
