import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Infectious.css'
import './Breathing.css'
import gg from './br_1.jpg'

export default function Breathing() {
  return (
    <div>
     <div><Navbar/></div>
     <div className="container">
     <h1 className='main_heading_breathing'>Breathing Problems</h1>
     <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Asthma</h2>
      <p className="infectious_p">Asthma is a chronic respiratory disease characterized by inflammation and narrowing of the airways, leading to difficulty breathing, coughing, wheezing, and chest tightness.</p>
      <a className='infectious_a' href="/de_10">First aid Solution</a>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Choking</h2>
      <p className="infectious_p">Choking occurs when an object or food becomes lodged in the throat or windpipe, blocking the airway and preventing breathing. It can cause severe respiratory distress and can be life-threatening if not treated promptly.</p>
      <a className='infectious_a' href="/de_11">First aid Solution</a>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Pneumonia</h2>
      <p className="infectious_p">Pneumonia is a respiratory infection that inflames the air sacs in the lungs, causing cough, fever, chest pain, and difficulty breathing. It can be caused by bacteria, viruses, or other microorganisms.</p>
      <a className='infectious_a' href="/de_12">First aid Solution</a>
      </div>
      </div>
      </div>

      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Tuberculosis</h2>
      <p className="infectious_p">Tuberculosis (TB) is a bacterial infection that mainly affects the lungs, but can also affect other parts of the body. It is characterized by symptoms such as cough, fever, night sweats, and weight loss.</p>
      <a className='infectious_a' href="/de_13">First aid Solution</a>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Swelling</h2>
      <p className="infectious_p">Swelling of the throat, also known as throat swelling, is a condition where the tissues in the throat become enlarged, leading to difficulty breathing and swallowing. It can be caused by allergic reactions, infections.</p>
      <a className='infectious_a' href="/de_14">First aid Solution</a>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={gg} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Drowning</h2>
      <p className="infectious_p">Drowning occurs when a person's airway is submerged in water, preventing them from breathing. It can lead to respiratory failure, brain damage, and death if not treated promptly.</p>
      <a className='infectious_a' href="/de_15">First aid Solution</a>
      </div>
      </div>
      </div>


     </div>
     <div><Footer/></div>
    </div>
  )
}
