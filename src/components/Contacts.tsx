import useTranslation from "next-translate/useTranslation"

export function Contacts() {
  const { t } = useTranslation('home')

  return (
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
  )
}
