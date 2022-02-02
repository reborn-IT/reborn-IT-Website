export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className=''>
        <div className='section-title'>
          <h2>Every <span className="blueText">'customer' </span>receives a <span className="blueText">'tailor made'</span> 
          <div>solution that is tailored to their individual needs</div>
          {/* <div className="blueText">fast-turnaround, high-end</div> */}</h2>
          
        </div>
        <div className='row'>
        <div className='col-md-3'>
        </div>
                <div className='col-md-6 accordion' id="accordionExample">
                 
                 <div class="accordion-item">
                  <h2 class="accordion-header serviceContent" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div className="IntermediateColor">01</div> Web Development <img className="downArrow" src="img/downArrow .png"></img>
                   </button>
                   </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                   <div class="accordion-body">
                   We combine latest technology with innovative concepts to ensure that your website would be of the highest possible quality, with a 100% satisfaction guarantee.
                </div>
              </div>
             </div>


             <div class="accordion-item">
              <h2 class="accordion-header serviceContent" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="IntermediateColor">02</div> Website Development<img className="downArrow" src="img/downArrow .png"></img>
                </button>
              </h2>
             <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div class="accordion-body">
               We will design websites for your business based on your requirements.
               </div>
             </div>
            </div>

            
             <div class="accordion-item">
               <h2 class="accordion-header serviceContent" id="headingTree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div className="IntermediateColor">03</div> Mobile Development <img className="downArrow" src="img/downArrow .png"></img>
                 </button>
               </h2>
               <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                 We can turn your idea into a market-winning mobile app thanks to our innovative designing mobile apps. If you want to make your platforms mobile-friendly, contact us to get started on a smooth journey that will complete your solution useful.
                 </div>
                </div>
             </div>


             <div class="accordion-item">
              <h2 class="accordion-header serviceContent" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <div className="IntermediateColor">04</div> UI Design <img className="downArrow" src="img/downArrow .png"></img>
                </button>
              </h2>
             <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div class="accordion-body">
               We design user interfaces that are rich in user experience. All graphical elements are designed mostly in Adobe XD and Figma, starting with wireframes and interfaces.
               </div>
             </div>
            </div>



            
           




                       {/* <div>
                            <button type='submit' className='' id="expolreBtn">
                            EXPLORE YOUR IDEAS  <img src="img/moveright.png"></img> 
                            </button>
                         </div> */}
                  
                </div>

                <div className='col-md-3'>
              </div>
              
        </div>



      



      </div>
    </div>
  )
}
