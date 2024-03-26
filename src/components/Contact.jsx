import React from 'react'
import Banner from './Banner'

const Contact = () => {
  return (
    <>
      <Banner title = 'CONTACT'/>

      
      <div className="container contact-form">
        <div className="row g-4 g-md-5">
            <div className="col-md-7">
              <h4>Get in touch</h4>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name"/>
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email"/>
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email"/>
                  </div>
                  <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your number"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>
                  <button className="btn btn-primary">Submit</button>
            </div>
            <div className="col-md-5 ">
              <h4>Contact us</h4>
              <div className="mt-5">
                  <div className="d-flex">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p > 198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div><hr/>
                  <div className="d-flex">
                    <i className="bi bi-telephone-fill"></i>
                    <p> 8888888888</p>
                  </div><hr/>
                  <div className="d-flex">
                    <i className="bi bi-envelope-fill"></i>
                    <p>Contact@gmail.com</p>
                  </div><hr/>
             
              </div>
            </div>
        </div>
    </div>
    <section className="map_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="map_inner">
                    
                       
                        <div className="map_bind">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{"border":"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
