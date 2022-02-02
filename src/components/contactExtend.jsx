import React, {useState} from 'react';
import axios from 'axios';
import Modal from './Modal';
import $ from 'jquery';
// import emailjs from "emailjs-com";

export const ContactExtend = (props) =>{

    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
   /*message, setMessgae*/ 

    function sendEmail(e){
        e.preventDefault();
        axios.post(`https://rebornit.herokuapp.com/API/rebornit/contactus`, { 
            name:name,
            email:email,
            phone:phone,
            message : message
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            if(res.data.status==200){
                popup();
            }else if(res.data.status==400){
                Errorpopup();
            }
            
            
            
            
            // setModalOpen(true);
            // {alert("RebornIT will contact you very soon !!! ")}
            
            // if(res.data=== true)
            
            //     setModalOpen(true);
            
                
            // else{
            //     alert('Error occured... !')
            //     window.location.reload(true);
            // }
        })
    }

   

    function popup(){
            $(document).ready(
                function(){
                  $('#contactbtn').click(
                 function(){
                   $('.popup_box').css("display", "block");
                 });
                 $('.btn1').click(function(){
                   $('.popup_box').css("display", "none");
                 });
                
               });
            }

            function Errorpopup(){
                $(document).ready(
                    function(){
                      $('#contactbtn').click(
                     function(){
                       $('.popup_box_error').css("display", "block");
                     });
                    
                   });
                }
              
                function closepopup(){
                    $('.btnError').click(function(){
                        $('.popup_box_error').css("display", "none");
                      });
                }

        return(
        <div>
        <div className="container">
            <div id="contactExtend" className="">

        {/* <header class="comapnyLogo raw">
            <img src="img/LOGO.png" alt="logo"></img>
        </header> */}

    <div class="">   
    <div class="raw">
        <div class="col-lg-6 Contactright">
            <div class="FormDiv">
                <div class="Hello">
                    <h1>Hi.Say Hello</h1>
                    <p>Fill up our Form bellow or <span class="formDivSpan">send us an email </span></p>
                </div>
            <div>
            <form action="" method="" class="form shadow-sm" id="formId">
               
                <div> <input type="text" name="name" placeholder="Your Name" onChange={event => setName(event.target.value)} required/></div>
                <div> <input type="tel" name="tele" placeholder="Phone Number" onChange={event => setPhone(event.target.value)} required/></div>
                <div><input type="email" name="email" placeholder="Email Address" onChange={event => setEmail(event.target.value)} required/></div>
                <div><textarea name="message" placeholder="Description" onChange={event => setMessage(event.target.value)} required/> </div>
                 <div class="btnDiv"><input type='submit' className='btn btn-primary btn-lg' id="contactbtn" onClick= {sendEmail}/> 
                {/* <div class="btnDiv"><input type='submit' className='btn btn-primary btn-lg' id="contactbtn"  onClick={() => {
                    setModalOpen(true);
                    sendEmail();
                    }}/> */}

               
                    <div class="popup_box">
                    <div class="btns">
                            <a href="#contactExtend" class="btn1" onClick={()=>{ window.location.reload(false);}}>X</a>
                            </div>
                        <h3>RebornIT will contact you soon!</h3>
                        {/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i> */}
                        {/* <label>RebornIT will contact you soon</label> */}
                            
                     </div>


                     <div class="popup_box_error">
                   
                        <h3>Something went wrong!</h3>
                         <div class="btns-error">
                            <a href="#contactExtend" class="btnError" onClick={closepopup}>OK</a>
                         </div>
                            
                     </div>
               
                
               
                   
                </div>
            </form>

           
            </div>
            </div>
        </div> 
       
        <div class="col-lg-6 Conatctleft">
            <img src="img/contactImage.png" alt="image" width="100%" height="80%"></img> 
        </div>
    </div>

    {modalOpen && <Modal setOpenModal={setModalOpen} />}

</div>

   
            </div>
        </div>

                    
       <footer className='footer'>
           <div className='container-footer'>
               <div className='rowFooter'>
               <div class="footer-col footerCenterText">
  	 			<img src="img/LOGO.png" alt="image" width="100%" height="100px"/>
                   <div className='footerSpanTextDiv'>
                   <span id="footerSpanText"style={{"padding":"none"}}>We are rebornIT. We do Web application <span>development, Website development,
Mobile application development and UI design.</span></span>
                   </div>
                   
  	 		</div>

              
               <div class="footer-col textDownShift">
  	 			<ul id="navBarFooter">
  	 				<li><a href="#features">Features</a></li>
  	 				<li><a href="#about">About</a></li>
  	 				<li><a href="#services">Services</a></li>
  	 			</ul>
  	 		</div>

               <div class="footer-col textDownShift">
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#"><span class="fa fa-phone-square">  077 4 141 768</span></a></li>
  	 				<li><a href="mailto:www.rebornit.lk@gmail.com"><span class="fa fa-envelope" id="mailFooter" >  rebornit.lk@gmail.com</span></a></li>
                </ul>		
  	 		    </div>

               <div class="footer-col textDownShift">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.facebook.com/rebornIT-111464454651943"><img src="https://img.icons8.com/fluency/48/000000/facebook-circled.png"/></a>
  	 				<a href="https://www.instagram.com/rebornit/"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
  	 				<a href="#"><img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"/></a>
  	 			</div>
  	 		</div>

               </div>
           </div>
       </footer>


{/* 
        <footer class="row footer-text-black">
        <div class="col-sm-4"><span><img src="https://img.icons8.com/fluency/48/000000/phone.png"/></span>077 4 141 768</div>
        <div class="col-sm-4"><a href="mailto:www.rebornit.lk@gmail.com">rebornit.lk@gmail.com</a></div>
        <div class="col-sm-4">
            <div className="">
                <a target="_blank" href="https://www.facebook.com/rebornIT-111464454651943"><img src="img/fb.png"></img></a>
                <a target="_blank" href="https://www.instagram.com/rebornit/"><img src="img/insta.png"></img></a>
                <a target="" href=""><img src="img/linkedin.png"></img></a>
              </div>
        </div>
     </footer> */}
     
     <div id='footer'>
            <div className='text-center'>
             <p>
                &copy; 2021 <span>rebornIT</span>. Designed by <span>rebornIT</span>
                
              </p>
            </div>
            </div>

        </div>
    );
}
