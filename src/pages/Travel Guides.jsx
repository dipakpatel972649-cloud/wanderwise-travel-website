import React from 'react';

export const Guides = () => {
  return (
     <div>
      {/* HERO */}
      <section className="hero-section text-center text-white position-relative">
        <img src={"https://media.istockphoto.com/id/1444367860/photo/corporate-concept-to-invest-in-the-environment-social-and-governance-cooperation-of.jpg?s=612x612&w=0&k=20&c=zXitqdPjxFEgH_TinsRPaWkstE6aUP3aep01HlHjp6w="} alt="hero" className="w-100 hero-img" />
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-6 fw-bold">Our Travel Agency and Guidelines</h1>
          <p className="lead mb-3">Discover Who We Are &amp; Why We Travel</p>
          <h2 className="hero-tagline">PASSION LED US HERE</h2>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h4 className="text-center fw-bold mb-3">HAPPY CUSTOMER</h4>
          <p className="text-center text-muted mb-4">We Deliver What We Promise. See What Clients Are Expressing About Us.</p>

          <div className="row g-4">
            <Testimonial
              avatar={"https://tse3.mm.bing.net/th/id/OIP.Rz8l5Vt7EhG2nY9Ux39v2QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"}
              name="John"
              text="We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality."
            />
            <Testimonial
              avatar={"https://tse4.mm.bing.net/th/id/OIP.SGsEPstyHXKwSNYQiEM8bwAAAA?pid=ImgDet&w=184&h=229&c=7&dpr=1.3&o=7&rm=3"}
              name="Smith"
              
              text="They were able to take our vision and turn it into a reality, and they did it all on time and within budget."
            />
            <Testimonial
              avatar={"https://tse3.mm.bing.net/th/id/OIP.YxevJg2OdVh5VoGrVhcIvQAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3"}
              name="Luke"
              
              text="They helped us develop a brand identity and created marketing materials that matched our voice."
            />
            <Testimonial
              avatar={"https://tse4.mm.bing.net/th/id/OIP.c7W7fysp1hTnhzomWiCkWQAAAA?pid=ImgDet&w=184&h=233&c=7&dpr=1.3&o=7&rm=3"}
              name="Reeves"
              
              text="They helped us develop a brand identity and created marketing materials that matched our voice."
            />
            <Testimonial
              avatar={"https://tse2.mm.bing.net/th/id/OIP.4odW3HGlJT0Pb5IslBx47AHaI4?pid=ImgDet&w=184&h=221&c=7&dpr=1.3&o=7&rm=3"}
              name="Luke"
              
              text="They helped us develop a brand identity and created marketing materials that matched our voice."
            />
            <Testimonial
              avatar={"https://tse2.mm.bing.net/th/id/OIP.SVK0CfRT-NTB2z5oZHAj6AHaJh?pid=ImgDet&w=184&h=235&c=7&dpr=1.3&o=7&rm=3"}
              name="Mark"
              
              text="They helped us develop a brand identity and created marketing materials that matched our voice."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Testimonial({ avatar, name, role, text }) {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img src={avatar} alt={name} className="rounded-circle testimonial-avatar me-3" />
            <div>
              <h6 className="mb-0">{name}</h6>
              <small className="text-muted">{role}</small>
            </div>
          </div>
          <p className="small text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
  
};
export default Guides;
