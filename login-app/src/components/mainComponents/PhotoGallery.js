import React from "react";


class PhotoGallery extends React.Component {

fileSelectHandler=event=>{
  console.log(event.target.files[0])
}



render(){
  return(
<div >
    <h1>Upload your file</h1>
    <div className="custom-file col-lg-2">

    <input   type="file" className="custom-file-input " onChange={this.fileSelectHandler}  />
    <label className="custom-file-label " >Choose file</label>

    </div>
      </div>
  )}
}
export default PhotoGallery
