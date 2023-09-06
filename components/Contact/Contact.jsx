
import Link from 'next/link';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
    <section className={styles.centered_div}>
      <h1 className={styles.create}>
        Contact Us
      </h1>
      <p className={styles.paragraph}>
      if you want additional information feel free to send us a message 
      </p>

      <form>
        <lable>
          <lable>
            <span className={styles.paragraph}>
              Email: {` `}
            </span>
            <input
              placeholder="Write your title ..."
              required
              className={styles.title}
            />
          </lable>
          <div className={styles.paragraph}>
            Your blog:
          </div>
          <textarea
            placeholder="Write your blog here..."
            className={styles.text_area}
          />
        </lable>

        <div className={styles.buttons}>
          <Link href="/" className={styles.cancle}>
              Cancel
          </Link>

          <button
            type="submit"
            className={styles.submit}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  </div>
  )
}

export default Contact