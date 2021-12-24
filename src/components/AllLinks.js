import React from 'react';
import './AllLinks.css';

function AllLinks() {
  return (
    <>    
        <div className='link-container'>
            <a href="https://linkedin.com/in/TwinkleMehta">Linkedin</a>
            <a href="https://github.com/TwinkleMehta">Github</a>
            <a href={process.env.PUBLIC_URL + "/Twinkle-Mehta-Resume-Sept21.pdf"}>Resume</a>
            <a href="https://twitter.com/Twinkle_Mehta_">Twitter</a>
            <a href="mailto:twinklemehta8@gmail.com">Email</a>
        </div>
    </> 
  )
}

export default AllLinks
