import React from 'react'
import './footer.css';
export default function Footer() {
    return (
        <div>
            <footer>
                <div className="up-section">
                    <a href="#" className="f-logo">Daily News</a>
                    <ul>
                        <h1>Company</h1>
                        <li><a href="#">Teams</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <ul>
                        <h1>About</h1>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Services</a></li>
                    </ul>
                    <ul>
                        <h1>Contact us</h1>
                        <li><p>+1 123 456 7890</p></li>
                        <li><p>House #215, Street 5</p></li>
                        <li><p>Washignton, DC</p></li>
                    </ul>
                </div>
                <div className="down-section">
                    <ul>
                        <h1>Explore</h1>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Item Detail</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>

                    <ul>
                        <h1>Support</h1>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <div className="social">
                        <h1>Social</h1>
                        <div className="social-icons">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="search">
                        <h1>Email</h1>
                        <input className='email' type="email" placeholder="Enter your email" />
                        <button className="btn btn-outline-danger mx-2 my-2 my-sm-0" type="submit">Subscribe</button>

                    </div>
                </div>
                <p className="copyright"><span className="f-logo">Daily News</span>Copyright@2024</p>
            </footer>
        </div>
    )
}
