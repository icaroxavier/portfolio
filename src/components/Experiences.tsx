import useTranslation from "next-translate/useTranslation"

interface TimelineItemProps {
  date: string
  description: string
}

function TimelineItem({ date, description }: TimelineItemProps) {
  return (
    <p className="flex gap-1 border-l-zinc-200 border-l py-2 pl-4 relative justify-start">
      <span className="h-4 w-4 absolute left-0 top-3 -translate-x-1/2 bg-blue-500 rounded-full"></span>
      <span className="text-zinc-600 font-bold w-40">{date}</span>
      <span className="text-zinc-500 flex-1" dangerouslySetInnerHTML={{ __html: description }}/>
    </p>
  )
}

export function Experiences() {
  const { t } = useTranslation('home')

  return (
    <section>
      <h2 className="text-2xl font-medium mb-2">{t('experiences.title')}</h2>
      <div className="flex flex-col">
        <TimelineItem date={t('experiences.soluevo.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.soluevo.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.soluevo.function')} - ${t('experiences.soluevo.role')}`} />
        <TimelineItem date={t('experiences.omie.1.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.omie.1.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.omie.1.function')} - ${t('experiences.omie.1.role')}`} />
        <TimelineItem date={t('experiences.omie.0.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.omie.0.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.omie.0.function')} - ${t('experiences.omie.0.role')}`} />
        <TimelineItem date={t('experiences.certare.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.certare.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.certare.function')} - ${t('experiences.certare.role')}`} />
        <TimelineItem date={t('experiences.embrapii.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.embrapii.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.embrapii.function')} - ${t('experiences.embrapii.role')}`} />
        <TimelineItem date={t('experiences.rav.period')} description={`<span class="text-zinc-600 font-medium">${t('experiences.rav.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.rav.function')} - ${t('experiences.rav.role')}`} />
      </div>
    </section>
  )
}
