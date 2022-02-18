
import React, { useEffect, useState } from "react";
import './Signup.css';
import validation from "./validation";

function Signup() {
//Storing Form Field Values
    const[formValues,setFormValues]= useState({ username:"",email:"",password:""});
    

    const handleChange = (event) =>{
        const{name,value} = event.target; //destructing
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }
//manage form error values
const [formErrorValues,setFormErrorValues] = useState({});
  
//flaf for form Refresh
const [isSubmit,setIsSubmit] = useState({});
//manage refreshing

const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrorValues(validation(formValues));
    isSubmit(true);
}

useEffect(() => {
    if (Object.keys(formErrorValues).length === 0 && isSubmit) {
        alert("success");
    }
}, [formErrorValues]);

    return (
        <div>
                 <pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>
            	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
   
			<div className="signup">
            
				<form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required=""value={formValues.username} onChange={handleChange}/>
                    <p>{formErrorValues.username}</p>
					<input type="email" name="email" placeholder="Email" required=""value={formValues.email} onChange={handleChange}/>
                    <p>{formErrorValues.email}</p>
					<input type="password" name="password" placeholder="Password" required=""value={formValues.password} onChange={handleChange}/>
                    <p>{formErrorValues.password}</p>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
        </div>
    );
}

export default Signup;