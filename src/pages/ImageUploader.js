import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleDelete = () => {
    setImage(null);
  }

  return (
    <div className='d-flex align-items-center'>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleChange}
      />

    <div>
      {image && (
        <Avatar style={{border:"1px solid blue",width:"100px",height:"100px",marginRight:"3rem"}} src={URL.createObjectURL(image)} alt="Uploaded Image" />
      )}
    </div>
    <div>
      <label htmlFor="raised-button-file">
        <Button style={{marginTop:'-3rem'}} variant="contained" color="primary" component="span">
          change Photo
        </Button>
      </label>
      {image && (
        <Button  style={{marginTop:'3.5rem',marginLeft:'-9.4rem',paddingRight:"2.3rem"}} variant="outlined" color="primary"  onClick={handleDelete}  startIcon={<DeleteIcon />}>
          Delete
        </Button>
      )}
    </div>
      
    </div>
  );
}

export default ImageUploader;