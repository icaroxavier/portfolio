import useTranslation from "next-translate/useTranslation"
import { CaretCircleRight, CaretCircleUp } from "phosphor-react"

interface TimelineItemProps {
  date: string
  description: string
  now?: boolean
}

function TimelineItem({ date, description, now }: TimelineItemProps) {
  const iconClassName = 'h-6 w-6 absolute left-0 top-2 -translate-x-1/2 bg-blue-500 rounded-full text-zinc-50'
  return (
    <p className="flex gap-1 border-l-zinc-200 border-l py-2 pl-4 relative justify-start">
      {now ? <CaretCircleRight className={iconClassName} /> : <CaretCircleUp className={iconClassName} />}
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
        <TimelineItem
          date={t('experiences.bmo.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.bmo.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.bmo.function')} - ${t('experiences.bmo.role')}`}
        />
        <TimelineItem
          date={t('experiences.nowcm.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.nowcm.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.nowcm.function')} - ${t('experiences.nowcm.role')}`}
        />
        <TimelineItem
          date={t('experiences.omie.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.omie.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.omie.function')} - ${t('experiences.omie.role')}`}
        />
        <TimelineItem
          date={t('experiences.certare.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.certare.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.certare.function')} - ${t('experiences.certare.role')}`}
        />
        <TimelineItem
          date={t('experiences.embrapii.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.embrapii.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.embrapii.function')} - ${t('experiences.embrapii.role')}`}
        />
        <TimelineItem
          date={t('experiences.rav.period')}
          description={`<span class="text-zinc-600 font-medium">${t('experiences.rav.title')}</span class="text-zinc-600 font-medium"> - ${t('experiences.rav.function')} - ${t('experiences.rav.role')}`}
        />

      </div>
    </section>
  )
}
