import Link from 'next/link';
import styles from './Form.module.css'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
  <div className={styles.container}>
    <section className={styles.centered_div}>
      <h1>
        <span>{type} post</span>
      </h1>
      <p>
        {type} and share your tourist experience 
      </p>

      <form
        onSubmit={handleSubmit}
      >
        <lable>
          <lable>
            <span>
              Title: {` `}
            </span>
            <input
              value={post.tag}
              onChange={(e) => setPost({...post,
              tag: e.target.value})}
              placeholder="Write your title ..."
              required
              className={styles.title}
            />
          </lable>
          <div>
            Your blog:
          </div>
          <textarea
            value={post.blog}
            onChange={(e) => setPost({...post,
            blog: e.target.value})}
            placeholder="Write your blog here..."
            required
            className={styles.text_area}
          />
        </lable>

        <div className={styles.buttons}>
          <Link href="/" className={styles.cancle}>
              Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className={styles.submit}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  </div>
  )
}

export default Form