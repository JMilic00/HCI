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
          <span>
            Your blog
          </span>
          <textarea
            value={post.blog}
            onChange={(e) => setPost({...post,
            blog: e.target.value})}
            placeholder="Write your blog here..."
            required
            className={styles.text_area}
          />
        </lable>
        <lable>
          <span>
            Tag {` `}
            <span>(#dalmatia,#Trogir,#Karlobag)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({...post,
            tag: e.target.value})}
            placeholder="Write your title ..."
            required
          />
        </lable>

        <div>
          <Link href="/">
              Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
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