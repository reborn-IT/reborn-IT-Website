export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
             
              <div className='col-md-8 col-md-offset-2 intro-text'>

              {/* <div class="container"> */}
                    {/* <div class="row"> */}
                        {/* <div class="col-sm-5"> */}
                           <div className="col-sm-5 div1">
                              <h1>
                                {props.data ? props.data.title : 'Loading'}
                              </h1>

                                <h4>{props.data ? props.data.paragraph1 : 'Loading'}</h4>
                                <h4>{props.data ? props.data.paragraph2 : 'Loading'}</h4>
                                <a
                                  href='#ContactExtend'
                                  className='btn btn-custom btn-lg page-scroll'
                                >
                                Start a Project
                                </a>{' '}
            
                        </div>
                              <div class="col-sm-7 div2">         
                                {/* <div className="div2"> */}
                                  <div id="pheonixLogo">
                                    <img id="pheonixImage" src="img/Logo Bird.png"></img>
                                  </div>
                               {/* </div> */}
                              </div>

                              {/* <div class="col-sm">
                                
                              </div> */}

                        {/* </div> */}
                      {/* </div> */}
              {/* </div> */}

             

              </div>
            </div>
          </div>

          {/* <div className="row contactDetailsDiv"> */}
               {/* <div className="col-sm-5 contactDiv">
                <p id="contactNumberLanding">077 4 141 768</p>
              </div> */}

              {/* <div className="col-sm-7 socialMediaDiv">
                <div className="col-sm-3">
                <a target="_blank" href="https://www.facebook.com/rebornIT-111464454651943"><img src="img/fb.png"></img></a>
                </div>

                <div className="col-sm-3">
                <a target="_blank" href="https://www.instagram.com/rebornit/"><img src="img/insta.png"></img></a>
                </div>
               
                <div className="col-sm-3">
                <img src="img/linkedin.png"></img>
                </div> 

                
                
              </div> */}

{/* <footer class="row footer-text-black">
        <div class="col-sm-6 contactNumberLanding">077 4 141 768</div>
        
        <div class="col-sm-6">
            <div className="">
                <a target="_blank" href="https://www.facebook.com/rebornIT-111464454651943"><img src="img/fb.png"></img></a>
                <a target="_blank" href="https://www.instagram.com/rebornit/"><img src="img/insta.png"></img></a>
                <a target="" href=""><img src="img/linkedin.png"></img></a>
              </div>
        </div>
     </footer> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  )
}
