import './App3.css';
import React from 'react';

function App3() {
  return (
    <div>
      <h1>Photographer's Showcase</h1>
    <div>
      
      <div class="gallery-wrapper">
     
      <div class="image-wrapper">
          <a href="#lightbox-image-1">
            <img src="https://cdn.pixabay.com/photo/2013/06/23/15/54/architecture-140785_960_720.jpg" alt="" />
            <div class="image-title">Image by: Alexender </div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-2">
            <img src="https://cdn.pixabay.com/photo/2022/04/06/20/30/big-ben-7116305_960_720.jpg" alt="" />
            <div class="image-title">Image by: Mathew Browne</div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-3">
            <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg" alt="" />
            <div class="image-title">Image by: Quang Le </div>
          </a>
        </div>   <div class="image-wrapper">
          <a href="#lightbox-image-4">
            <img src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg" alt="" />
            <div class="image-title">Image by: 畅 苏 </div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-5">
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg" alt="" />
            <div class="image-title">Image by: Larisa Koshkina </div>
          </a>
        </div>
        <div class="image-wrapper">
          <a href="#lightbox-image-6">
            <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" alt="" />
            <div class="image-title">Image by: Dan Fador</div>
          </a>
        </div>
      </div>
      </div>








      <div class="gallery-lightboxes">
        
      <div class="image-lightbox" id="lightbox-image-1">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <img src="https://cdn.pixabay.com/photo/2013/06/23/15/54/architecture-140785_960_720.jpg" alt="" />
            <div class="image-title">Image by: Alexender </div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-2">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <img src="https://cdn.pixabay.com/photo/2022/04/06/20/30/big-ben-7116305_960_720.jpg" alt="" />
            <div class="image-title">Image by: Mathew Browne </div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-3">
          <div class="image-lightbox-wrapper">
            <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg" alt="" />
            <div class="image-title">Image by: Quang Le </div>
          </div>
        </div>
        <div class="image-lightbox" id="lightbox-image-4">
          <div class="image-lightbox-wrapper">
            <img src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg" alt="" />
            <div class="image-title">Image by:  畅 苏 </div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-5">
          <div class="image-lightbox-wrapper">
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg" alt="" />
            <div class="image-title">Image by: Larisa Koshkina </div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-6">
          <div class="image-lightbox-wrapper">
            <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" alt="" />
            <div class="image-title">Image by: Dan Fador </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default App3;