import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='center_Aboutus'>
        <div className='center_the_div' >
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>WHO WE ARE</h1>
          <p style={{fontFamily: 'Arial, sans-serif', fontSize: '22px' }}>

          Are you yearning for exciting escapades, unforgettable journeys, 
          and remarkable discoveries? Look no further than K-agency, 
          your trusted partner in unlocking the world's most captivating destinations of Croatia.
          As a leading tourist blog company, 
          we are dedicated to curating immersive travel experiences 
          and sharing them with wanderlust-driven explorers like you. 

          </p>
          <p style={{fontFamily: 'Arial, sans-serif', fontSize: '22px' }}>

          Join us on a voyage through the heart of AdventureSeeker and discover how 
          we can help you embark on the adventure of a lifetime.

          </p>
          <h1  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px' }}>WE ARE DIFFERENT THAN THE REST</h1>
          <p style={{ fontFamily: 'Arial, sans-serif',fontSize: '22px' }}> 
           In a world brimming with choices, 
           finding the right option can be overwhelming.
           When it comes to your travel needs.
          </p>
          <p style={{fontFamily: 'Arial, sans-serif', fontSize: '22px' }}>
          We believe that selecting the best partner is 
           crucial for an unforgettable experience. 
           So, why should you choose us over the rest? 
           Let's delve into the reasons that set us apart
           and make us your superior choice.
          </p>
          <div className="button_about_div">
            <Link href="/ContactUs">
              <button className="button_about">Contact us</button>
            </Link>
         </div>
        </div>
      </div>
  )
}

export default page