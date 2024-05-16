import React, {useState} from "react";
import "../../css/add-employee.css";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddEmployee() {

  const myStyle = {
    backgroundColor: '#a78364',
    borderRadius: '1px solid #a78364 !important'
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accountType, setAccountType] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    
    const data = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      accountType: accountType,
     
    };

    axios
      .post(" http://localhost:5050/users/register", data)
      .then((res) => {
        console.log(res);
        toast.success("Successfully registration ! ");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  }

  return (
    
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" >
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
                      Add Users
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={(e) => handleSubmit(e)}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Password</label>
                          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Re password</label>
                          <input type="password" className="form-control" onChange={(e) => setPassword2(e.target.value)}/>
                        </div>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-2">
                        <label className="form-label mx-5">Type</label>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountType"
                            value="user"
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">User</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountType"
                            value="finance"
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">Finace</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountType"
                            value="delivery"
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">Delivery</label>
                        </div>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountType"
                            value="product"
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">Product</label>
                        </div>
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="accountType"
                            value="driver"
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">Driver</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input type="submit" className="btn2" value="Sign up" />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://thumbs.dreamstime.com/b/fashion-men-s-clothing-accessories-casual-style-flat-lay-fashion-men-s-clothing-accessories-casual-style-flat-lay-105631703.jpg"
                      className="img-fluid "
                      alt="Sample image "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
   
  );
}
