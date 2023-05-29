import React, { useState } from 'react'

const Form = () => {

    const [info, setinfo] = useState({email : " " , title : " " , description : "" }) 

    const handalsubmit =(e)=>{
      e.preventDefault()
      console.log(info);
    }
    
    const handalchange = (e) =>{
        setinfo({...info , [e.target.name] : e.target.value})
    }
  return (
    <>
<div className="container my-5 pb-2 border border-5">
<form onSubmit={handalsubmit}>
<fieldset>
<legend>Form</legend>
  <div className="mb-3">
  
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name='email' id="email" value={info.email} onChange={handalchange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' value={info.title}  onChange={handalchange} />
    </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="description" name='description' value={info.description} onChange={handalchange} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</fieldset>
</form>
</div>


    </>
  )
}

export default Form
