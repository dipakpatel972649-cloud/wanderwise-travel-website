import React from 'react';
// Ensure you have Bootstrap imported in your main file (main.jsx or App.jsx)
// import 'bootstrap/dist/css/bootstrap.min.css'; 

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        
        {/* --- Top Section: About Us & Image --- */}
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            {/* Custom CSS class 'blob-shape' used here */}
            <div className="">
              <img 
                src="https://media.istockphoto.com/id/2222066271/photo/mission-vision-values-business-strategy.jpg?s=612x612&w=0&k=20&c=TPXIT5FtlgPvL0tdp66mc5fPQlUn0hAPc_EEuk2puvo=" 
                alt="Team" 
                className="img-fluid" 
              />
            </div>
          </div>
          
          <div className="col-md-6">
            <h5 className="fw-bold">Our Story</h5>
            <p>
            We provided well researched and carefully designed Domestic & International Tour Package itineraries to our clients from the world over. Shree Swaminarayan Tourism is one of the most renowned tour and tour operators in Ahmedabad that has served hundreds and thousands of travel enthusiasts with the best customized travel packages from the last two decades or more. We are fully committed to work for the tourism industry’s growth and development.
            </p>
            <button className="btn btn-outline-success">READ MORE &rarr;</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default About;