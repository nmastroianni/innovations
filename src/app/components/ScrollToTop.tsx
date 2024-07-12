'use client'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { HiChevronUp } from 'react-icons/hi2'

import React, { useRef, useState } from 'react'
import Link from 'next/link'

const ScrollToTop = () => {
  const container = useRef(null)
  const [hidden, setHidden] = useState(true)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous: number = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(false)
    } else if (latest === 0) {
      setHidden(true)
    } else {
      setHidden(true)
    }
  })
  const goToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <motion.div
      className="fixed bottom-12 right-12 grid h-8 w-8 cursor-pointer place-content-center rounded-full border-2 border-slate-600"
      ref={container}
      initial={{ y: '+300%' }}
      variants={{ visible: { y: 0 }, hidden: { y: '+300%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onClick={goToTop}
    >
      <HiChevronUp className="h-6 w-6 text-slate-400" />
    </motion.div>
  )
}

export default ScrollToTop
