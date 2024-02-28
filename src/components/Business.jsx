import styles, { layout } from '../style'
import { features } from '../constants'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Code the web application, <br className='sm:block hidden'/>
          using React JS.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur commodi. Facere illo fugiat, culpa ut, praesentium placeat qui quis mollitia vel ipsa fugit! Quibusdam ut a maiores nisi? Rem.</p>
        </div>
    </section>
  )
}

export default Business