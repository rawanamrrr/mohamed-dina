"use client"

import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/translations'
import { useLanguage } from '@/contexts/LanguageContext'
import { Heart, Utensils, Music, Camera } from 'lucide-react'

const timelineItems = [
  {
    timeKey: 'timelineWelcomeTime',
    descKey: 'timelineWelcomeDesc',
    icon: Heart,
    side: 'right' as const, // Text on the right
  },
  {
    timeKey: 'timelineDinnerTime',
    descKey: 'timelineDinnerDesc',
    icon: Utensils,
    side: 'left' as const, // Text on the left
  },
  {
    timeKey: 'timelineSecondPartTime',
    descKey: 'timelineSecondPartDesc',
    icon: Music,
    side: 'right' as const, // Text on the right
  },
  {
    timeKey: 'timelinePhotosTime',
    descKey: 'timelinePhotosDesc',
    icon: Camera,
    side: 'left' as const, // Text on the left
  },
]

export default function TimelineSection() {
  const t = useTranslation()
  const { language } = useLanguage()
  const isAr = language === 'ar'

  return (
    <section className="relative py-20 px-4 md:py-32 bg-gradient-to-b from-transparent via-accent/5 to-transparent overflow-hidden">
      {/* Connecting decorative element from previous section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-px bg-gradient-to-b from-accent/20 to-transparent" />

      <div className="max-w-4xl mx-auto pt-10">
        {/* Timeline Container with Shade Box */}
        <motion.div 
          className="relative bg-card/80 backdrop-blur-md border border-accent/20 rounded-[32px] p-8 md:p-16 shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={`text-4xl md:text-5xl text-accent font-elegant mb-4 ${isAr ? 'font-arabic' : ''}`}>
              {t('timelineTitle')}
            </h2>
            <div className="w-24 h-px bg-accent/30 mx-auto" />
          </motion.div>

          {/* Decorative elements inside box */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Animated Decorative corner elements matching other sections */}
          <motion.div 
            className="absolute top-0 left-0 w-24 h-24 border-l border-t border-accent/30 rounded-tl-[32px]"
            initial={{ x: -20, y: -20, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-accent/30 rounded-br-[32px]"
            initial={{ x: 20, y: 20, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-10 w-px bg-accent/20" />

          <div className="relative space-y-28 md:space-y-32">
            {timelineItems.map((item, index) => {
              const Icon = item.icon
              const textOnRight = item.side === 'right'
              
              return (
                <motion.div 
                  key={index}
                  className={`relative flex items-center justify-between w-full ${textOnRight ? 'flex-row-reverse' : 'flex-row'}`}
                  initial={{ opacity: 0, x: textOnRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Content Side (Text) */}
                  <div className={`w-[42%] md:w-[45%] ${textOnRight ? 'text-left' : 'text-right'} ${isAr ? (textOnRight ? 'text-right' : 'text-left') : ''}`}>
                    <div className="space-y-1">
                      <p className="text-[12px] md:text-xs text-accent font-luxury font-bold tracking-[0.2em] uppercase font-bold">
                        {t(item.timeKey as any)}
                      </p>
                      <h3 className={`text-base md:text-xl text-foreground font-elegant font-medium leading-tight ${isAr ? 'font-arabic' : ''}`}>
                        {t(item.descKey as any)}
                      </h3>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full border border-background z-10" />

                  {/* Icon Side */}
                  <div className={`w-[42%] md:w-[45%] flex ${textOnRight ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-md border border-accent/20 shadow-sm flex items-center justify-center text-accent/70 hover:scale-105 transition-all duration-500 group">
                      <Icon className="w-7 h-7 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
