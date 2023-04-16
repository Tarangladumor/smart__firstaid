import React from "react";
import il from './health.jpg'
import './Cntent.css'

export default function Content() {
  return (
    <div className="container mt-5 mb-5 health-awareness">
      <div className="img_box_1">
        <img src={il}  alt="" className="img_1"/>
      </div>
      <div className="text_box_1" >
        <p  className="text_1">
         <ul>
         <h1>Health Awarness</h1>
          <li className="word">Stay informed: Encourage your audience to stay informed about their health and seek professional medical advice when necessary.</li>
          <li className="word">Be prepared: Emphasize the importance of being prepared for emergencies, such as having a well-stocked first aid kit and knowing basic first aid techniques.</li>
          <li className="word">Prioritize self-care: Encourage your audience to prioritize their physical and mental health through healthy habits, such as exercise, good nutrition, stress management, and self-care.</li>
         </ul>
        </p>
      </div>
    </div>
  )
}
