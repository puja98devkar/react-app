import React, { useState } from "react";

const Contact = () => {
   const [data,setData]=useState({
      fullname:'',
      phone:'',
      email:'',
      msg:''
   });

   const InputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
        return{
            ...preVal,[name]:value,  
        }
    })
   }
   const formSubmit =(e)=>{
           e.preventDefault();
           alert(`My Name is ${data.fullname} .My Mobile number is ${data.phone} and Email is  ${data.email},here is what i want to say ${data.msg} `)
   }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact</h1>
            </div>

            <div className="container contact_div">
                <div className="raw">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter your fullName</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your fullName"></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="phone" class="form-control" id="exampleFormControlInput1"name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your PhoneNumber"></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"></input>
                            </div>


                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} ></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;