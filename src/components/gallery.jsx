import { Image } from "./image";
import Typewriter from 'typewriter-effect';

export const Gallery = (props) => {

  
  
  return (
    <div id='portfolio' className='text-center'>
      <div className=''>
        <div className='section-title'>
          <h2 id="capableMainText">What we are <div className="capableText">Capable</div> of?</h2>
          
        </div>
        
        <h2 className='TypewriterDiv' id="TypewriterDiv">
          <Typewriter
          options={{
            strings: ["DON'T STRUGGLE WITH YOUR IDEA.",
                      'JOIN <strong><span style="color:#6415ff; text-transform:none">rebornIT</span></strong> TO MAKE IT REAL.'
                    ],
            autoStart: true,
            loop: true,
            delay:50,
            deleteSpeed:30,
            pauseFor:2000,
          }}
          
          // onInit={(typewriter)=>{
          //   typewriter
          //   .start()
          //   .typeString("RebornIT")
          //   .pauseFor(2000)
          //   .deleteAll()
          //   .typeString('<strong>We <span style="color:#6415ff;">RebornIT</span> Here!</strong>')
          //   .deleteAll()
          //   .start()
            
          // }
          // }
          / >

          {/* <div className='portfolio-items'>
           <video controls width="90%" height="440" loop>
              <source src="img/demoVideo.mp4" type="video/mp4" id="video"></source>
           </video> 
          </div> */}
        </h2>
      </div>
    </div>
  )
}
