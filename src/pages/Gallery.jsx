import React from 'react';

// Uses the uploaded image at the given local path for the hero and gallery images.
const HERO_IMAGE = '/mnt/data/a9e5fa1b-0160-4a3b-acd7-ca5bddc63e5f.jpg';

const galleryImages = [
 'https://images.unsplash.com/photo-1486556813609-9a827fdc306f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRvdXJpc218ZW58MHx8MHx8fDA%3D', 
 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D', 
 'https://images.unsplash.com/photo-1684189162727-3b0fd73ba9e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHRvdXJpc218ZW58MHx8MHx8fDA%3D',
  'https://media.istockphoto.com/id/649356542/photo/adventurous-people-making-ascent-to-high-mountain-walking-on-glacier.webp?a=1&b=1&s=612x612&w=0&k=20&c=qRNUM9m4We5lJfOsU9l4Equ5Hf2kccC3y24i_NPvtLk=',
   'https://images.unsplash.com/photo-1669111958117-6f3d7c57abc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRvdXJpc218ZW58MHx8MHx8fDA%3D', 
   'https://images.unsplash.com/photo-1500297726361-1715d90aec00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRvdXJpc218ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1493221875746-1203de4f7a56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRvdXJpc218ZW58MHx8MHx8fDA%3D', 
  'https://images.unsplash.com/photo-1710005631041-a0efc9795e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRvdXJpc218ZW58MHx8MHx8fDA%3D', 
  'https://images.unsplash.com/photo-1566931476788-47984a25beea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHRvdXJpc218ZW58MHx8MHx8fDA%3D'
];

export default function Gallery() {
  return (
    <div>
      <style>{`
        .hero {
          background-image: url('https://images.unsplash.com/photo-1666634350840-710f4a87d6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx0b3VyaXNtfGVufDB8fDB8fHww');
          background-size: cover;
          background-position: center;
          height: 220px;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: #fff;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .hero-title {
          font-family: 'Georgia', serif;
          font-size: 40px;
          margin-left: 30px;
        }
        .gallery-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .gallery-row { margin-top: 30px; }
        @media (max-width: 576px) { .hero { height: 160px; } .gallery-img { height: 140px; } }
      `}</style>
      {/* Hero */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container h-100 hero-content">
          <h1 className="hero-title">Gallery</h1>
        </div>
      </header>

      {/* Gallery content */}
      <main className="container">
        <div className="gallery-row">
          <div className="row g-3">
            {galleryImages.map((src, idx) => (
              <div className="col-12 col-sm-6 col-md-4" key={idx}>
                <div className="card border-0 shadow-sm">
                  <img src={src} alt={`gallery-${idx}`} className="gallery-img card-img-top" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center my-5">
          <button className="btn btn-outline-primary">Load more</button>
        </div>
      </main>
    </div>
  );
}
