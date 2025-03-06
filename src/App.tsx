import React from 'react';
import { Phone, Mail, MapPin, Calendar, Users, Music, Utensils, Camera, Star, Shield, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function App() {
  const services = [
    { icon: Users, title: 'Large Capacity', description: 'Accommodates up to 1000 guests' },
    { icon: Calendar, title: 'Flexible Booking', description: 'Available for various event types' },
    { icon: Music, title: 'Sound System', description: 'State-of-the-art audio equipment' },
    { icon: Utensils, title: 'Catering', description: 'Professional catering services' },
    { icon: Camera, title: 'Photography', description: 'Event photography services' },
    { icon: MapPin, title: 'Prime Location', description: 'Easy access and parking' },
    { icon: Star, title: 'Decoration Service', description: 'Various cloth and lighting decoration services available' },
    { icon: Shield, title: 'Security', description: '24/7 security personnel' },
    { icon: Clock, title: 'Flexible Hours', description: 'Available day and night' },
  ];

  const carouselImages = [
    './images/fh1.jpg',
    'images/fh2.jpg',
    'images/fh3.jpg',
    'images/fh4.jpg',
    'images/fh5.jpg',
    'images/fh6.jpg',
    'images/fh7.jpg',
    'images/fh8.jpg',
  ];

  const galleryImages = [
    'images/fhserv2.JPG',
    'images/fhserv5.JPG',
    'images/fhserv3.JPG',
    'images/fhserv4.JPG',
    'images/fhserv1.JPG',
    'images/fhserv6.JPG',
    'images/fhserv7.JPG',
    'images/fhserv8.JPG',
    'images/fhserv9.JPG',
    'images/fhserv10.JPG',
    'images/fhserv11.JPG',
    'images/fhserv12.JPG',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo placeholder - replace src with your logo */}
            <img
              src="images\fhlogo.jpg"
              alt="Elegant Events Venue"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gold-dark">Sri Subhamastu Convention Hall</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gold-dark hover:text-gold transition">Home</a>
            <a href="#gallery" className="text-gold-dark hover:text-gold transition">Gallery</a>
            <a href="#services" className="text-gold-dark hover:text-gold transition">Services</a>
            <a href="#contact" className="text-gold-dark hover:text-gold transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen" id="home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Convention Hall ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gold/30"></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Tangerine, cursive' }}>
                Sri Subhamastu Convention Hall AC
              </h1>
              {/* <p className="text-xl text-gold-light mb-8" style={{ fontFamily: 'Tangerine, cursive' }}>
                Where Luxury Meets Celebration
              </p> */}
              <a
                href="#contact"
                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-dark transition duration-300 shadow-lg hover:shadow-gold/50" style={{ fontFamily: 'Tangerine, cursive' }}
              >
                Book Now
              </a>
            </div>
          </div>
        </Swiper>
      </header>

      {/* Gallery Section */}
      {/* <section className="py-20 px-4 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gold-dark">Our Venue</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience elegance with a spacious stage, ample dining space, and a vast parking lot—perfect for all your celebrations!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="image-container relative rounded-xl overflow-hidden shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`Convention Hall ${index + 1}`}
                  className="w-full h-80 object-cover image-zoom"
                />
                <div className="hover-overlay absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Venue
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 px-4 bg-white" id="gallery">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4 text-gold-dark">Our Venue</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Experience elegance with a spacious stage, ample dining space, and a vast parking lot—perfect for all your celebrations!
    </p>
    <div className="overflow-x-auto">
      <div className="flex gap-6 min-w-max">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="image-container relative rounded-xl overflow-hidden shadow-lg group animate-fade-in flex-none w-64"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={image}
              alt={`Convention Hall ${index + 1}`}
              className="w-full h-80 object-cover image-zoom"
            />
            <div className="hover-overlay absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Venue
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gold-light px-4" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gold-dark">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything You Need, All in One Place
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gold-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gold-dark">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Let us help you create your perfect event
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 bg-gold-light p-8 rounded-xl animate-fade-in">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gold" />
                <span className="text-gray-800">9849873334 - Madhu Vegineti</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gold" />
                <span className="text-gray-800">indhu.vegineti123@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gold" />
                <span className="text-gray-800">Near SGS college, Chillakallu road, Jaggaiahpet, Andhra Pradesh 521175</span>
              </div>
            </div>
            {/* <form className="space-y-4 animate-fade-in">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gold text-white py-3 rounded-lg hover:bg-gold-dark transition duration-300 shadow-lg hover:shadow-gold/50"
              >
                Send Message
              </button>
            </form> */}
            <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-md space-y-4">
            <img
              src="images\fhlogo.jpg"
              alt="Logo"
              className="w-32 h-32 object-contain"
            />
            <h1 className="text-3xl font-bold text-gray-800">
              Customize your event as you wish!
            </h1>
            <h2 className="text-xl text-gray-500">
              Single destination for all your event needs
            </h2>
          </div>


          </div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-gold-dark text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Elegant Events Venue. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
