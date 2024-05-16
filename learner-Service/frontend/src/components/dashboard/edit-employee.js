import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import "../../css/add-employee.css";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditEmployee() {

  const myStyle = {
    backgroundColor: '#a78364',
    borderRadius: '1px solid #a78364 !important'
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");


  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5050/users/profile/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setAccountType(response.data.accountType);
    // alert(response.data.name);
    
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5050/users/edit-employee/${id}`, {
        name,
        email,
        accountType,
      });
      navigate("/admin/dashboard/view-employees");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" >
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
                      Edit User
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={updateUser}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name || ""}/>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
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
                            checked={accountType === 'user'}
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
                            checked={accountType === 'finance'}
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
                            checked={accountType === 'delivery'}
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
                            checked={accountType === 'product'}
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
                            checked={accountType === 'driver'}
                            onChange={(e) => setAccountType(e.target.value)}
                           
                          />
                          <label className="form-check-label">Driver</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <input type="submit" className="btn2" value="Update" />
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
