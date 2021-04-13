
import React, {  useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch } from 'react-redux';
// import Edit from '../edit'

const CardDocuments = ({data}) => {
    const {name,src,id}=data
    let [date,setDate]=useState()
    const [image,setImage]=useState(src);
    let label=useRef(null);
    const change=useRef()
    const dispatch=useDispatch()
    console.log(name,src,id,image)
    function changeImage(e){
            e.preventDefault()
            console.log(name,src,id,image)
            dispatch({type:"CHANGE_IMAGE" ,id:id,image:image, name:name,date:date }) 
        }
        const getBase64 = (e) => {
            var file = e.target.files[0];
            e.target.value = null;
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              setImage(reader.result);
            //   dispatch({type:"CHANGE_IMAGE" ,id:id,image:image, name:name,date:date })
              label.current.style.display="none"
              change.current.type="submit"
              change.current.style.visibility="visible"
              change.current.value="upload"
              change.current.className="button"
            };
            reader.onerror = function(error) {
              console.log('Error: ', error);
            };
          };
   
    return( 
        <div className=" card col-lg-3 col-md-6 col-sm-12">
       <h1 className="card-title">{name}</h1>
       <div className="card-block ">
        <form onSubmit={changeImage}>
       <ReactDatePicker className="ml-50" required selected={date}
       onChange={date=>{setDate(date)}} 
       dateFormat="dd/MM/yyyy"
       />
       <img className="card-img " src={image} width="150px" height="150px" alt="unable to fetch"/>
       <label ref={label} htmlFor="edit"><span style={{display:'flex',alignItems:"center",justifyContent:"center",fontSize:"200px"}}><i class="fas fa-cloud-upload-alt"></i></span></label>
       <input ref={change} style={{visibility:"hidden"}}  type="file" id="edit" onChange={(e)=>{getBase64(e)}} /> 
       </form>
        </div>
        </div>
        
     );
}
 
export default CardDocuments;