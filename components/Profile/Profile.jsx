import BlogCard from '../BlogCard/BlogCard'

const Profile = ( {name, desc, data, handleEdit, handleDelete } ) => {
  return (
    <section>
      <h1>{name} Profile</h1>
      <p>{desc}</p>

      <div>
      {data.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
      </div>
    </section>
  )
}

export default Profile