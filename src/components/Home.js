import React from 'react'
import puppyImg from '../assets/puppiesfrom2019litter/4pups.jpg'
import kimberMom from '../assets/silverfatherandkimber/Kimber-mom.JPG'
import dukeDad from '../assets/silverfatherandkimber/Duke-dad.JPG'

function Home() {

  return (
    <div className='home'>
      <img src={puppyImg} alt='4 colored lab puppies, black, charcoal, chocolate, and silver' width='100%' />
      <div className='home-content'>
        <h1>About Mountain River Silver Labradors</h1>
        <p>Mountain River Silver Labs are silver factored labrador puppies bred right out of a loving home in Eastern Idaho.</p>
      </div>
      <div className='kimber-info'>
        <img src={kimberMom} alt='Black Labrador mother dog' height='300px' />
        <div className='kimber-text'>
          <h3>Kimber</h3>
          <p>Kimber is a Silver Factored Black Lab.</p>
        </div>
      </div>
      <div className='duke-info'>
        <div className='duke-text'>
          <h3>Silver Duke</h3>
          <p>Silver Duke was a Silver Lab stud. He is no longer our stud, he was sold or something like that.</p>
        </div>
        <img src={dukeDad} alt='Black Labrador mother dog' height='300px' />
      </div>
    </div>
  )
}

export default Home
