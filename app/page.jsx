
const Home = () => {
  return (
    <section>
      <div className='overlayStyle'>
        <img
        src="/assets/images/trogir.jpg"
        alt="user_image"
        className='images'
        />
        <div>
          <p className='textStyle'>
            Share your experience
              of Croatia 
          </p>
        </div>
      </div>
      <div className='center_home'>
        <div className='center_the_div' >
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>Welcome to K-agency</h1>
          <p style={{ fontFamily: 'Arial, sans-serif',fontSize: '22px' }}> 
            The place to explore Croatia and it's beauty.
            Find inspiration from our users and new places to visit
          </p>
          <p style={{ fontFamily: 'Arial, sans-serif',fontSize: '22px' }}>
            Share your experience of Croatian natural beauty.
            Discove Curtular Connection, Hidden Gems of nature, Interactive
            Community and much more. Join now and enjoy
          </p>
            <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', Color:"#ff7b00" }}>Join now and enjoy</h1>
        </div> 
          <div className='overlayStyle'>
                  <img 
                    src="/assets/images/split3.jpg"
                    alt="user_image"
                    className="image Split"
                  />
                  <div>
                    <p className='textStyleSplit'>
                      View and Write Blogs with ease
                    </p>
                  </div>
            </div>
      </div>
    </section>
  )
}

export default Home