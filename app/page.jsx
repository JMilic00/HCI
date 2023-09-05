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
      <div className='center_Aboutus'>
        <div className='center_the_div' >
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>WHO WE ARE</h1>
          <p style={{fontFamily: 'Arial, sans-serif', fontSize: '22px' }}>

          

          </p>
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>WE ARE DIFFERENT THAN THE REST</h1>
          <p style={{ fontFamily: 'Arial, sans-serif',fontSize: '22px' }}> 
           In a world brimming with choices, 
           finding the right option can be overwhelming.
           When it comes to your travel needs,
           we believe that selecting the best partner is 
           crucial for an unforgettable experience. 
           So, why should you choose us over the rest? 
           Let's delve into the reasons that set us apart
           and make us your superior choice.
          </p>
          <div className="button_about_div">
            <button className="button_about">Contact us</button>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Home