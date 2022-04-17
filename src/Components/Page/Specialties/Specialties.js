import React from "react";
import SpecaialPhotosCard from "./SpecaialPhotosCard";

const Specialties = () => {
const photos = [
   {
      id:1,
      img: "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category:'FASHION PHOTOGRAPHY',
      text:"I do like the fashion . I like the narratives that you get in fashion photography."
   },
   {
      id:2,
      img: "https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category:'Wadding',
      text:"It is a profound honor as a photographer to witness two people falling in love "

   },
   {
      id:3,
      img: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category:'Nature',
      text:" I shall focus with photographs. I shall be content with silence. Nature never goes out of style "

   },
];
return (
   <div className="container">
      <div id="specialties">
      <div className="text-center py-4">
         <h3 className="py-2">My Specialties</h3>
         <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla
            non metus auctor fringilla. Donec sed odio dui.
         </p>
      </div>
      <div className="row">
         {
            photos.map(img=> <SpecaialPhotosCard data={img} key={img.id}></SpecaialPhotosCard>)
         }
      </div>
      </div>
   </div>
);
};

export default Specialties;
