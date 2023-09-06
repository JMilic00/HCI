
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
            <h2 className={styles.text}>Costumer Support</h2>
            <div>
                <p className={styles.text}>FAQ</p>
                <p className={styles.text}>Help</p>
                <p className={styles.text}>Privacy</p>
            </div>
        </div>
        <div>
            <h2 className={styles.text}>Additional information</h2>
            <div>
                <p className={styles.text}>FAQ</p>
                <p className={styles.text}>Help</p>
                <p className={styles.text}>Privacy</p>
            </div>
        </div>
        <div>
            <h2 className={styles.text}>Social media</h2>
            <div>
            <Image 
            src="/assets/images/instagram.svg"
            alt="logo"
            width={30}
            height={30}
            className={styles.image}
            />
             <Image 
            src="/assets/images/facebook.svg"
            alt="logo"
            width={30}
            height={30}
            className={styles.image}
            />
             <Image 
            src="/assets/images/twitter.svg"
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