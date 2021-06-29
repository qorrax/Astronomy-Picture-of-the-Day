import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';


function NasaImage () {

const [image, setImage] = useState([])



useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=GvreX9qiJUw5PNyF4QofDQWNp3SsBlwCDkc1BKZ7")
    .then((res) => {
      setImage(res.data)
      console.log(res)
        
        })

    .catch((err) => console.log(err))

    
}, []);





  
return (
  
    <div className="NasaPicture">
       <p> {image.date} this is Nasa Pictue of the day  </p>
       <img className="nas" src={image.url} alt="pic of the day"/>
       <p> {image.explanation} </p>    


     </div>

      );

}
     
  
  export default NasaImage;
  