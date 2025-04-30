import { useState } from 'react'
import {useForm} from 'react-hook-form'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const{
   register,handleSubmit,watch,
   formState:{errors,isSubmitting}
 }=useForm();

 async function onSubmit(data){
   await new Promise((resolve)=>setTimeout(resolve,5000));
   console.log('submitting the data',data);
 }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    
     <div>
       <label>First Name:</label>
       <input type="text" {...register('firstName',{required:true,
        minLength:{value:3,message:'length should be greater than 3'}})} 
        className={errors.firstName ?'error-input':""}/>
        {errors.firstName && <p className='err-msg'>{errors.firstName.message}</p>}
     </div>

     <br />

     <div>
       <label>Middle Name:</label>
       <input type="text" {...register('middleName')}/>
     </div>

     <br />

     <div>
       <label>Last Name:</label>
       <input type="text" {...register('lastName',{required:true,minLength:3})}/>
     </div>

     <br />

     <div>
       <label>Email Id:</label>
       <input type="email" {...register('emailId',{required:true})}/>
     </div>

     <br />

     <div>
     <label >Gender:</label>
     <select name="" id="" {...register('gender',{required:true})}>
      <option value="select">select</option>
      <option value="female">Female</option>
      <option value="Male">Male</option>
      <option value="Other">Other</option>
     </select>
     </div>

     <br />
     <input type="submit" disabled={isSubmitting}
             value={isSubmitting?"submitting":"submit"}/>
   </form>
  )
}

export default App
