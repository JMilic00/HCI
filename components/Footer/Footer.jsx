
import styles from './Footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.display}>
         <Image 
        src="/assets/images/K.jpg"
        alt="logo"
        width={60}
        height={60}
        className={styles.image}
        />
        <div>
            <h2>Costumer Support</h2>
            <div>
                <p>FAQ</p>
                <p>Help</p>
                <p>Privacy</p>
            </div>
        </div>
        <div>
            <h2>Costumer Support</h2>
            <div>
                <p>FAQ</p>
                <p>Help</p>
                <p>Privacy</p>
            </div>
        </div>
        <div>
            <h2>Costumer Support</h2>
            <div>
            <Image 
            src="/assets/images/K.jpg"
            alt="logo"
            width={30}
            height={30}
            className={styles.image}
            />
             <Image 
            src="/assets/images/K.jpg"
            alt="logo"
            width={30}
            height={30}
            className={styles.image}
            />
             <Image 
            src="/assets/images/K.jpg"
            alt="logo"
            width={30}
            height={30}
            className={styles.image}
            />
            </div>
        </div>

    </div>
  )
}

export default Footer