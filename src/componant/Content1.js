import React from 'react'
import im from './firstaid.webp'
import './Content1.css'

export default function Content1() {
  return (
    
      <div className="container first-aid-kit" >
      <div className='img_box_2'>
        <img className='img_2' src={im} alt="" />
      </div>
      <div className='text_box_2'>
        <p className='text_2'>
        
         <ul>
         <h1>First Aid Kit Awarness</h1>
          <li className="word">Be prepared: Emphasize the importance of having a well-stocked first aid kit in case of emergencies.</li>
          <li className="word">Know your kit: Encourage your audience to familiarize themselves with the contents of their first aid kit and know how to use each item.</li>
          <li className="word">Keep it accessible: Remind your audience to keep their first aid kit easily accessible and in a location where everyone in the household can find it quickly in case of an emergency.</li>
         </ul>
        </p>
        
      </div>
    </div>
    
  )
}
