import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./ImageUploader.css"
function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleDelete = () => {
    setImage(null);
  }

  return (
    <div className='Image'>
      <input type="file" onChange={handleChange} />
      {image && <img style={{width:"130px",height:"130px" ,borderRadius:"50%"}} src={URL.createObjectURL(image)} alt="Uploaded Image" />}
      {image && <Button variant="outline-primary" onClick={handleDelete}>Delete</Button>}
    </div>
  );
}

export default ImageUploader;