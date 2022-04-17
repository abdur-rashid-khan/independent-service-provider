import { useEffect, useState } from "react";


const LoadData = () => {
   const [photos , setPhotos] = useState([]);
   useEffect(()=>{
      fetch('photos.json')
      .then(res => res.json())
      .then(data => setPhotos(data))
   },[])
   return (
      {photos,setPhotos}
   );
};

export default LoadData;