import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/UserManagement/register";
import Login from "./components/UserManagement/login";
import Test from "./components/UserManagement/test";
import Home from "./components/Home";
import Footer from "./components/inc/footer";

import DeliveryManagament from "./components/DeliveryManagement/DeliveryManagament";
import StudentManagament from "./components/DeliveryManagement/StudentManagement";
import CourseTracking from "./components/DeliveryManagement/CourseTracking";

import Header from "./components/inc/header";
import "bootstrap/dist/css/bootstrap.css";

// import AddUsers from "./components/UserManagement/AddUsers";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const loggedRole = localStorage.getItem("role");
  // const location = useLocation();
  // console.log(location)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        
        <Route path="/progress-tracking" element={<CourseTracking />} />
        <Route path="course-delivery-management" element={<DeliveryManagament />} />
        <Route path="/student-management" element={<StudentManagament />} />


        

        <Route
          path="/"
          element={isLoggedIn === "true" ? <Home /> : <Login />}
        />
        
       

  
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
