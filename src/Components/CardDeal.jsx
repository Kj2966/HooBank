import React from 'react'
import styles,{layout } from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
<h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nam unde odit iusto perferendis tenetur et, cupiditate reiciendis </p>
      <Button styles={`mt-10 rounded-[10px]`}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal
  