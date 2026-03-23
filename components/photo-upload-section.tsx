"use client"

import { motion, Variants } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import { Upload, QrCode } from "lucide-react"

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
              <QrCode className="w-6 h-6 text-accent" />
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
            {language === 'ar' ? 'شاركونا صوركم من اليوم' : 'Share Your Photos From The Day'}
          </motion.h2>
          <motion.p 
            className="font-luxury text-xl md:text-2xl italic text-muted-foreground max-w-2xl mx-auto px-4"
            variants={fadeIn}
          >
            {language === 'ar' ? 'ارفعوا الصور التي التقطوها خلال احتفالنا لنحتفظ بهذه الذكريات معاً' : 'Upload the photos you take during our celebration so we can cherish these memories together'}
          </motion.p>
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
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* QR Code Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white p-4 rounded-3xl shadow-xl flex items-center justify-center border border-accent/10">
                  <Image 
                    src="/qr-code.png" 
                    alt="Upload Photos QR Code" 
                    width={300} 
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center space-y-4">
                  <p className="font-luxury text-xl md:text-2xl text-foreground font-medium">
                    {language === 'ar' ? 'امسح الرمز لرفع صورك' : 'Scan QR Code to Upload Your Photos'}
                  </p>
                  <p className="font-luxury text-lg md:text-xl text-muted-foreground italic">
                    {language === 'ar' ? 'أو اضغط أدناه لرفع صورك مباشرة' : 'Or click below to upload your photos directly'}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 w-full max-w-xs mx-auto">
                  <div className="h-px flex-1 bg-accent/20" />
                  <span className="text-xs text-accent uppercase tracking-widest font-bold">OR</span>
                  <div className="h-px flex-1 bg-accent/20" />
                </div>

                {/* Upload Button */}
                <a
                  href="https://drive.google.com/drive/folders/1vAgyCOlwF8PV9zO0pquVNprQAgc2YRrJ" // Placeholder link based on the user's previous map update pattern
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-luxury text-xl md:text-2xl transition-all duration-300 hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                >
                  <Upload className="w-6 h-6" />
                  <span>{language === 'ar' ? 'ارفع صورك' : 'Upload Your Photos'}</span>
                </a>

                <p className="font-luxury text-base md:text-lg text-muted-foreground italic">
                  {language === 'ar' ? 'التقط صوراً خلال الحفل وارفعها هنا' : 'Take photos during the event and upload them'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
