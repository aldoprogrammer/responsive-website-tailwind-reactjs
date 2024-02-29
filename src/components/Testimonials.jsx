import styles from '../style'
import { feedback } from '../constants'

const Testimonials = () => (
    <section className={`${styles.paddingY} 
    ${styles.flexCenter} flex-col relative`}
    id='clients'>
      <div />

      <div className='w-full flex justify-between 
      items-center md:flex-row flex-col sm:mb-16 mb-6 relative
      z-[1]'>
        <h1 className={styles.heading2}>
          What people are <br className='sm:block hidden' /> 
          saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

    </section>
  )


export default Testimonials