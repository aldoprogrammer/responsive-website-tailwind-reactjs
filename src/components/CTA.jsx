import React from 'react'
import styles from '../style'
import Button from './Button'
const CTA = () =>  (
    <section>
      <div className={`${styles.flexCenter} 
      ${styles.marginY} ${styles.padding} 
      sm:flex-row flex-col bg-black-gradient-2 
      rounded-[20px] box-shadow`}>
        <div className='flex-1 flex-col flex'>
        <h2 className={styles.heading2}>Let's try to learn coding</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5
        `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ad eum, aliquam provident ipsam voluptates nemo modi impedit eligendi repellat doloremque incidunt officia blanditiis. Aut exercitationem ut officia aliquam dolorem.</p>
        </div>
      
      <div className={`${styles.flexCenter} sm:ml-10 
       ml-0 sm:mt-0 mt-10` }>
        <Button styles="mt-10"/>
      </div>
      </div>
    </section>
  )

export default CTA