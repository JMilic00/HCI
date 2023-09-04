import Feed from '@components/Feed/Feed'

const Home = () => {
  return (
    <section>
      <div className='overlayStyle'>
        <img 
        src="\assets\images\trogir.jpg"
        alt="user_image"
        className='images'
        width={"100%"}
        />
        <div>
          <p className='textStyle'>
            Share your experience
              of Croatia 
          </p>
        </div>
      </div>
        <Feed />
    </section>
  )
}

export default Home