import useTranslation from "next-translate/useTranslation"

interface TimelineItemProps {
  date: string
  description: string
}

function TimelineItem({ date, description }: TimelineItemProps) {
  return (
    <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
      <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-zinc-200 rounded-full"></span>
      <span className="text-zinc-300 font-bold">{date}</span>
      <span className="text-zinc-400">{description}</span>
    </p>
  )
}

export function Timeline() {
  const { t } = useTranslation('home')

  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">{t('bio.title')}</h2>
      <div className="flex flex-col">
        <TimelineItem date="06/2001" description={t('bio.06/2001')} />
        <TimelineItem date="02/2021" description={t('bio.02/2021')} />
        <TimelineItem date="07/2021" description={t('bio.07/2021')} />
        <TimelineItem date="09/2021" description={t('bio.09/2021')} />
        <TimelineItem date="10/2021" description={t('bio.10/2021')} />
        <TimelineItem date="04/2022" description={t('bio.04/2022-1')} />
        <TimelineItem date="04/2022" description={t('bio.04/2022-2')} />
        <TimelineItem date="03/2023" description={t('bio.03/2023-1')} />
        <TimelineItem date="03/2023" description={t('bio.03/2023-2')} />
      </div>
    </section>
  )
}
