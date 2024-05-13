import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import CourseDeliveryManagament from "./components/DeliveryManagement/CourseDeliveryManagement";
import EnrollCourseTracking from "./components/DeliveryManagement/CourseTracking";
import StudentManagament from "./components/DeliveryManagement/StudentManagement";
import Home from "./components/Home";
import Login from "./components/UserManagement/login";
import Register from "./components/UserManagement/register";
import Footer from "./components/inc/footer";
import Header from "./components/inc/header";

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
        <Route path="/course-tracking" element={<EnrollCourseTracking />} />
        <Route path="/admin/dashboard" element={<Dashboard />}>
        <Route path="course-delivery-management" element={<CourseDeliveryManagament />} />
        <Route path="student-management" element={<StudentManagament />} />

      </Route>

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
