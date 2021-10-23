import React, {useState, useEffect} from 'react';
import transparent from '../public/transparent.png';

function Main(){
  const url = "https://api.thecatapi.com/v1/images/search?mime_types=jpg&limit=12";
  const [images, setImages] = useState(null);

  function getImages(url) {
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(json => {
      setImages(json);
    });
  }

  function mapImages(images){
    if(images){
      return images.map((image) =>
        /*<div className="" key={image.id}>
          <img src={image.url} alt="" />
        </div>*/
        <div className="imagewrapper w-full" key={image.id}>
          <div className="image rounded" style={{
            backgroundImage: 'url(' + image.url + ')',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
          <img src={transparent} alt="" />
          </div>
        </div>
      );
    }
  }
  useEffect(() => {
    getImages(url);
  }, [url]);
  console.log(images);

  return (
    <main className="block1 lg:mr-4 lg:w-9/12 lg:flex-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 auto-rows-fr">
      {mapImages(images)}
    </main>
  )
}

export default Main;
