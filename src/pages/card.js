
import React, { Fragment, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch } from 'react-redux';
import types from '../types/types';
const CardDocuments = ({data}) => {
    const {name,src,id}=data
    let [date,setDate]=useState()
    const [display,setDisplay]=useState(false)
    const [image,setImage]=useState(src);
    const dispatch=useDispatch()
    //console.log(name,src,id,image);
    function changeImage(e){
            e.preventDefault()
            console.log(name,src,id,image)
            dispatch({type:types.edit_data ,id:id,image:image, name:name,date:date }) 
            setDisplay(false)
            
        }
        const getBase64 = (e) => {
            var file = e.target.files[0];
            e.target.value = null;

            
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              setImage(reader.result);
              setDisplay(true)
             
               };
            reader.onerror = function(error) {
              console.log('Error: ', error);
            };
          };
   
    return( 
      <Fragment key={id} > 
      <div className=" card col-lg-3 col-md-6 col-sm-12 ">
       <h1 className="card-title text-center">{name}</h1>
        <div className="card-block ">
        <form id={data.id} onSubmit={changeImage} >  
        <div  className="d-flex justify-content-center align-item-center m-2">
       <ReactDatePicker className="w-100" required selected={date}
       onChange={date=>{setDate(date)}} 
       dateFormat="dd/MM/yyyy"
       />
       </div>
       <img className="card-img  card-img-fluid" src={src} width="150px" height="150px" alt="unable to fetch"/>
      {!display  && <div className="d-flex justify-content-center align-item-center m-2"><label className="btn btn-info"  htmlFor={`edit-${data.id}`} >UPDATE FILE</label>
       <input   type="file"   id={`edit-${data.id}`} onChange={(e)=>{getBase64(e)}} />
       </div>
       }
       {display && <div  className="d-flex justify-content-center align-item-center m-2"><input  className="btn btn-primary"  type="submit" value="upload"  /></div>} 

       </form>
        </div>
        </div>
      </Fragment>
       
        
     );
}
 
export default CardDocuments;