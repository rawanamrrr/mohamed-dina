"use client"

import { motion, Variants } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import { BookHeart } from "lucide-react"

// Professional animation variants matching the main page
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

const scaleIn: Variants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

const flyFromLeft: Variants = {
  hidden: { x: -200, opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] as const,
      type: "spring",
      stiffness: 60,
      damping: 18
    }
  }
}

const flyFromRight: Variants = {
  hidden: { x: 200, opacity: 0, scale: 0.8, rotate: 5 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] as const,
      type: "spring",
      stiffness: 60,
      damping: 18
    }
  }
}

const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 }
  }
}

export default function PhotoUploadSection() {
  const { language } = useLanguage()

  return (
    <motion.section 
      className="relative py-20 px-4 md:py-32 bg-gradient-to-b from-transparent via-accent/5 to-transparent overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fastStaggerContainer}
    >
      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        initial={{ x: 300, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        initial={{ x: -300, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          variants={fastStaggerContainer}
        >
          <motion.div className="flex items-center justify-center gap-4 mb-8" variants={flyFromLeft}>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, originX: 1 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <BookHeart className="w-6 h-6 text-accent" />
            </motion.div>
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
          </motion.div>
          <motion.h2 
            className="font-luxury text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-4 tracking-wide" 
            variants={flyFromRight}
          >
            {language === 'ar' ? 'قصتنا' : 'Our Story'}
          </motion.h2>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={scaleIn}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-md border-2 border-accent/20 rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Decorative corner elements */}
            <motion.div 
              className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl"
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-3xl"
              initial={{ x: 50, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {language === 'ar' ? (
                  <div className="space-y-6 text-right" dir="rtl">
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      رحلة بدأت بمصادفة صغيرة… لكنها غيّرت كل شيء.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      كانت البداية في 17 نوفمبر 2022، عندما خرجتُ في بثٍ مباشر كتجربة بسيطة، وبين العديد من التعليقات لفتت انتباهي هي وحدها دون غيرها.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      وبعد أشهر، التقينا في فناء المستشفى حيث تعمل طبيبة، وبين الكثير من العيون، التقت أعيننا… وفي تلك اللحظة أدركنا أن هذا اللقاء لم يكن صدفة، بل قدرًا جمعنا.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      وعلى مدار أربع سنوات، لم تكن قصتنا سهلة، فقد مررنا بأوقات صعبة وأخرى جميلة، وتجاوزنا معًا الكثير من الضغوط والظروف، لكننا في كل مرة كنا نختار بعضنا من جديد.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      واليوم، نبدأ فصلًا جديدًا من حياتنا بقلوب مليئة بالحب، مؤمنين أن هذه ليست النهاية… بل بداية لحكاية أجمل نعيشها معًا، يدًا بيد ❤️
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6 text-left">
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      A journey that began with a small coincidence… yet changed everything.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      It all started on November 17, 2022, when I went live as a simple experiment. Among countless comments, she was the one who caught my attention like no one else.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      Months later, we met at the hospital courtyard where she works as a doctor. Amid so many eyes around us, our eyes met… and in that moment, we knew it wasn’t just a coincidence, but destiny bringing us together.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      Over the past four years, our story hasn’t been easy. We’ve had both hard and beautiful moments, faced many challenges and pressures, yet every time we chose each other all over again.
                    </p>
                    <p className="font-luxury text-xl md:text-2xl text-foreground leading-relaxed">
                      And today, we begin a new chapter of our lives with hearts full of love, believing this is not the end… but the beginning of a more beautiful story, one we will live together, hand in hand ❤️
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
