import React from 'react';
import LoadData from '../../Hooks/LoadData';
import CustomLink from '../Active/CustomLink';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';

const Gallery = () => {
   const {photos} = LoadData();
   const photoSlice=photos.slice(0,6)
   return (
      <section>
         <div className="container">
            <div className='container text-center py-4'>
               <h2>Photo Gallery</h2> 
            </div>
            <div className="row">
               {
                  photoSlice.map(photo=><GalleryPhoto data={photo} key={photo.id}></GalleryPhoto>)
               }
            </div>
            <div className="text-center mb-3">
               <CustomLink className='btn btn-primary ' to='/gallery' >see more</CustomLink>
            </div>
         </div>
      </section>
   );
};

export default Gallery;