'use client'

import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { innovations } from '@/lib/data'
import { HiLightBulb } from 'react-icons/hi'
import { cn } from '@/lib/utils'

export default function Innovations() {
  return (
    <section id="experience" className="scroll-mt-28">
      <VerticalTimeline lineColor={'darkgray'}>
        {innovations.map((item, index) => (
          <React.Fragment key={item.innovation + index}>
            <VerticalTimelineElement
              // visible={inView}
              contentStyle={{
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.year}
              dateClassName={cn('!text-2xl !py-0 !pt-1.5')}
              icon={<HiLightBulb />}
              iconStyle={{
                background: 'rgba(0, 0, 0, 0.85)',
              }}
            >
              <h2 className="pb-6 !text-4xl font-bold !text-white">
                {item.leader}
              </h2>
              <p className="!mt-0 !pb-3 !text-2xl font-normal">
                {item.innovation}
              </p>
              <p className="!my-4 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <hr className="border-slate-700" />
              {item.benefits.length > 0 && (
                <div className="prose lg:prose-lg xl:prose-xl prose-h3:text-white">
                  <h3 className="py-3">Benefits</h3>
                  <ul className="prose list-disc pl-6 !text-white">
                    {item.benefits.map((benefit, i) => {
                      return <li key={benefit + i}>{benefit}</li>
                    })}
                  </ul>
                </div>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
