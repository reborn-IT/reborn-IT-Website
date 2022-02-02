import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>

      <div className="row no-gutters">
                  {/* <div className="col-md-4"><div className="leftside">
                    <div className="contactBG">
                      <img src="img/contactBG.png" alt="image" width="98%" height="660px"></img>
                    </div>
                  </div>
                  </div> */}

                  <div className="col-md-8">
                   
                        <div className="row">

                            <div className="col-sm-5">
                              <div className="innerContactDivLeft">
                                      <ul id="contactUl">
                                      <li>Work</li>
                                      <li>Services</li>
                                      <li>About</li>
                                      <li>Insights</li>
                                      <li>Head </li>
                                </ul>
                              </div>
                            </div>

                            <aside className="col-sm">
                              
                              <div>
                                <img src="img/LOGO.png" width="300px"></img>
                              </div>

                              <div className="innerContactDivRight">
                                <div>
                                {/* <a  href='#contactExtend'>
                                  <button type='submit' className='page-scrol' id="contactbtn" onClick='contactExtend'>
                                    Start a Project
                                    </button></a> */}
                                    
                                
                                </div>
                              </div>
                            </aside>
                        </div>

                        <div className="row">
                          <div className="contactBottomPart">
                            <h2>Get In Touch. </h2>
                          <div>
                          <a href="#contactExtend" className="page-scroll" ><button type='submit' className='page-scroll' id="emailButton" onClick="contactExtend">
                            Enter Your Email  <img src="img/moveright.png"></img> 
                          </button></a>
                       </div>
                      
                      <div className="copyright">
                            <p>Copyright <img src="img/copyright.png"></img> rebornIT</p>
                            <p>Terms of Services / Privacy Policy</p>
                        </div>
                   </div>
               </div>

            

                  
                    </div>
              </div>

        
      
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
      
      </div>
          {/* <div id='footer'>
            <div className='text-center'>
             <p>
                &copy; 2021 <span>rebornIT</span>. Designed by <span>rebornIT</span>
                
              </p>
            </div>
            </div> */}
          </div>
  )
}
