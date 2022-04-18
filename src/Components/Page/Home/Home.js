import React from 'react';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Specialties from '../../Page/Specialties/Specialties'
import Services from '../Services/Services/Services';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';

const Home = () => {
   return (
      <div className='pt-5'>
         <Banner></Banner>
         <Specialties></Specialties>
         <Services></Services>
         <Gallery></Gallery>
         <Footer></Footer>
      </div>
   );
};

export default Home;