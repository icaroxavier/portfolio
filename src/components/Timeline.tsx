import useTranslation from "next-translate/useTranslation"

interface TimelineItemProps {
  date: string
  description: string
}

function TimelineItem({ date, description }: TimelineItemProps) {
  return (
    <p className="flex gap-2 border-l-zinc-200 border-l py-2 pl-4 relative">
      <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-blue-500 rounded-full"></span>
      <span className="text-zinc-600 font-bold">{date}</span>
      <span className="text-zinc-500">{description}</span>
    </p>
  )
}

export function Timeline() {
  const { t } = useTranslation('home')

  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">{t('timeline.title')}</h2>
      <div className="flex flex-col">
        <TimelineItem date="06/2001" description={t('timeline.06/2001')} />
        <TimelineItem date="02/2021" description={t('timeline.02/2021')} />
        <TimelineItem date="07/2021" description={t('timeline.07/2021')} />
        <TimelineItem date="09/2021" description={t('timeline.09/2021')} />
        <TimelineItem date="10/2021" description={t('timeline.10/2021')} />
        <TimelineItem date="04/2022" description={t('timeline.04/2022-1')} />
        <TimelineItem date="04/2022" description={t('timeline.04/2022-2')} />
        <TimelineItem date="03/2023" description={t('timeline.03/2023-1')} />
        <TimelineItem date="03/2023" description={t('timeline.03/2023-2')} />
      </div>
    </section>
  )
}
