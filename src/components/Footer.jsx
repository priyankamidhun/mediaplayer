import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5'>
        <div style={{ width: "400px" }}>
          <h4>
            <i class="fa-solid fa-video text-warning me-4"></i> Media Player
          </h4>
          <h6 style={{ fontSize: "10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit velit placeat quasi animi maxime natus vero aspernat blanditiis magni,molestias <br /> similique?Nesciunt,aspernatur?</h6>
        </div>
        <div>
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none' }}><h6>Landing Page</h6></Link>
          <Link to={'/home'} style={{ textDecoration: 'none' }}><h6>Home Page</h6></Link>
          <Link to={'/watch'} style={{ textDecoration: 'none' }}><h6>Watch History</h6></Link>
        </div>
        <div>
          <h4>Guides</h4>
          <h6>React</h6>
          <h6>React Bootstrap</h6>
          <h6>Bootswatch</h6>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Enter Your EmailID' className='form-control' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex align-items-center justify-content-evenly fs-4 mt-3'>
            <i class="fa-brands fa-instagram me-4"></i>
            <i class="fa-brands fa-twitter me-4"></i>
            <i class="fa-brands fa-linkedin me-4"></i>
            <i class="fa-brands fa-facebook me-4"></i>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <p>Copyright&#169;2023 Media Player.Built with React.</p>
      </div>
    </>
  )
}

export default Footer;
