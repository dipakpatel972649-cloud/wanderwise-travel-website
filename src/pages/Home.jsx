import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid mt-4">
      <header>
        <div
          className="text-center d-flex align-items-center justify-content-center"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=612x612&w=0&k=20&c=G432lmdUz9qrW6D4sZYxLe6K-Km85OEmZg0qpcGyRCI=")',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            color: 'white',
          }}
        >
          {/* Dark Overlay for text readability */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)',
            }}
          ></div>

          {/* Hero Content */}
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <h1>Best Tour And Travel Agency</h1>
                <p className="lead mb-4">
                  Travel Around The World And Explore Different Cultures 
                </p>
                <a href="#" className="btn btn-success me-2">
                  Our Package
                </a>
                <a href="#" className="btn btn-outline-light">
                  Make An Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2: Why Choose Us Cards */}
      <section className="py-5">
        <h2 className="mb-4 text-center">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Quality</h5>
                <p className="card-text">
                  We Give Best Quality.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Reliability</h5>
                <p className="card-text">
                  Best Lowest Price.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Support</h5>
                <p className="card-text">
                  We Grateful For Everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action (CTA) */}
      <section className="text-center py-5 bg-success text-white rounded">
        <h2>Get Started Today With Us</h2>
        <p className="mb-4">
          
        </p>
        <a href="/register" className="btn btn-light btn-lg">
          Make An Enquiry
        </a>
      </section>
    </div>
  );
};

export default Home;