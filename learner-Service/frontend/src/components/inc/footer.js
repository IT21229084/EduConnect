import React from 'react'
import '../../css/footer.css'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
}from "react-icons/fa";

function Footer() {
  return (
    <footer className="mainFooter">
  	 <div className="footer-container">
  	 	<div className="footer-row row">
  	 		<div className="footer-colomn col-md-3">
  	 			<h4 className='footer-chil-header'>company</h4>
  	 			<ul>
  	 				<li><a href="# ">about us</a></li>
  	 				<li><a href="# ">our services</a></li>
  	 				<li><a href="# ">privacy policy</a></li>
  	 				<li><a href="# ">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-colomn col-md-3">
  	 			<h4 className='footer-chil-header'>get help</h4>
  	 			<ul>
  	 				<li><a href="# ">FAQ</a></li>
  	 				<li><a href="# ">Enrollment</a></li>
  	 				<li><a href="# ">returns</a></li>
  	 				<li><a href="# ">order status</a></li>
  	 				<li><a href="# ">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-colomn col-md-3">
  	 			<h4 className='footer-chil-header'>online Courses</h4>
  	 			<ul>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-colomn col-md-3">
  	 			<h4>follow us</h4>
  	 			<div className="footer-social-links">
  	 				<a href="# "><FaFacebook/></a>
  	 				<a href="# "><FaTwitter/></a>
  	 				<a href="# "><FaInstagram/></a>
  	 				<a href="# "><FaLinkedin/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	</div>
  </footer>
  )
}

export default Footer