import styles, { layout } from '../style'
import { features } from '../constants'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]`}>
    <div className={`w-[64px] h-[64px]
     rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className='w-[50%] 
      h-[50%] object-contain' />
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Code the web application, <br className='sm:block hidden' />
          using React JS.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur commodi. Facere illo fugiat, culpa ut, praesentium placeat qui quis mollitia vel ipsa fugit! Quibusdam ut a maiores nisi? Rem.</p>
        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id}
            {...feature}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Business