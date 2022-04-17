import React from 'react';
import LoadData from '../../../Hooks/LoadData';
import TotalPhoto from './TotalPhoto';

const TotalPhotos = () => {
   const {photos} = LoadData();
   return (
      <section style={{paddingTop:'5rem'}}>
         <div className="container">
            <div className="gallery-header">
               <h2>Total Photos</h2>
            </div>
            <div className='row'>
            {
               photos.map(photos=><TotalPhoto data={photos} key={photos.id}></TotalPhoto>)
            }
            </div>
         </div>
      </section>
   );
};

export default TotalPhotos;