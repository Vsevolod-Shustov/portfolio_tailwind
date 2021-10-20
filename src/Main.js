import React, {useState, useEffect} from 'react';

import styles from './Main.scss';

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
        <div className="" key={image.id}>
          <img src={image.url} alt="" />
        </div>
      );
    }
  }
  useEffect(() => {
    getImages(url);
  }, [url]);
  console.log(images);

  return (
    <main id={styles.main} className="block1 lg:mr-4 lg:flex-auto-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mapImages(images)}
    </main>
  )
}

export default Main;
