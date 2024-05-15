import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../css/adminDashboard.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/admin/dashboard/add-employee",
      name: "Add Employees",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/dashboard/view-employees",
      name: "All Employees",
      icon: <FaRegChartBar />,
    },
    {
      path: "/admin/dashboard/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/admin/dashboard/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/admin/dashboard/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container-fluid dashboard-container">
      <div style={{ width: isOpen ? "300px" : "100px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Dashboard
          </h1>
          <div
            style={{ marginLeft: isOpen ? "10px" : "20px" }}
            className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
