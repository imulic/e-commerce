'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    const timer = setInterval(() => {
      const now = new Date()
      const timeDifference = Number(targetDate) - Number(now)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the month</h3>
        <p>
          Ger ready for a shopping experience like never before. Shop the latest trends at the best
          prices at your convenience.
        </p>
      </div>
      <ul className={classes.stats}>
        <StatBox label={'Days'} value={time.days} />
        <StatBox label={'Hours'} value={time.hours} />
        <StatBox label={'Minutes'} value={time.minutes} />
        <StatBox label={'Seconds'} value={time.seconds} />
      </ul>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
