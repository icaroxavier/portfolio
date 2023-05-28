import useTranslation from "next-translate/useTranslation"

export function Hobbies() {
  const { t } = useTranslation('home')

  return (
    <section>
      <h2 className="text-2xl font-medium mb-1">{t('hobbies.title')}</h2>
      <p className="text-justify flex items-center font-medium text-zinc-500">
        {t('hobbies.description')}
      </p>
    </section>
  )
}
