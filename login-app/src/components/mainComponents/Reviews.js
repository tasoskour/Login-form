import React from "react";


class Reviews extends React.Component {

fileSelectHandler=event=>{
  console.log(event.target.files[0])
}
fileUploadHandler=event=>{

}


render(){
  return(
<div >
    <h1>Upload your file</h1>
    <div className="custom-file col-lg-2">

    <input   type="file" className="custom-file-input " onChange={this.fileSelectHandler}  />
    <label className="custom-file-label " for="customFile">Choose file</label>

    </div>
      </div>
  )}
}
export default Reviews
