import { useState } from "react";
import axios from "axios"
//import cover from '../images/cover.jpg';

function SignupPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address:"",
    nic:"",
    mobile:"",

  });
  const [msg, setMsg] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formValues.password == formValues.confirmPassword){
        const userObj={
            first_name: formValues.firstName,
            last_name: formValues.lastName,
            email: formValues.email,
            password: formValues.password,
            nic:formValues.nic,
            customer_address:formValues.address,
            customer_contact:formValues.mobile
          }
        await axios.post("http://localhost:4000/customer/sign-up",userObj).then((res)=>{
            console.log(res)
            if(res.status==200){
                setMsg("please check your email.")
            }else{
                setMsg("Ooops!. resgiter failed.")
            }
           
        })
    }else{
        //console.log("password and confirm password did not match")
        setMsg("password and confirm password did not match")
    }
   
    // TODO: Submit form data to server
  };

  // style={{
  //   backgroundImage: `url(${cover})`,
  //   backgroundRepeat: false,
  //   }}

  return (
    <div className="flex flex-col items-center bg-cover bg-center filter justify-center h-screen mt-5" >
      <h1 className="text-3xl font-bold mb-8 text-white">Sign up</h1>
      <form
        className="w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md mt-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formValues.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formValues.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
            address
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="address"
            value={formValues.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
            NIC
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="NIC"
            name="nic"
            type="text"
            placeholder="Enter your last name"
            value={formValues.nic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
            contact
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="contact"
            name="mobile"
            type="text"
            placeholder="Enter your last name"
            value={formValues.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
             />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2">Sign Up</button>
            </div>

            <p className="text-danger">{msg}</p>
        </form>
    </div>
  )
}

export default SignupPage;