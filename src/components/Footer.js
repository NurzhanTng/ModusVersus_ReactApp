import React from 'react';
import '../css/Footer.css'
import Logo from "./General/Logo";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__inner1">
                <div className="container">
                    <div className="company-info">
                        <Logo />
                        <p className="company-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec .</p>
                        <div className="company-info__contact">
                            <p className="company-info__contact-title">Phone:</p>
                            <p className="company-info__contact-data">182 2569 5896</p>
                        </div>
                        <div className="company-info__contact">
                            <p className="company-info__contact-title">e-mail:</p>
                            <p className="company-info__contact-data">info@modu.versus</p>
                        </div>
                    </div>
                    <div className="links">
                        <h3 className="links__title">Company</h3>
                        <ul className="links_inner">
                            <li className="link">About</li>
                            <li className="link">FAQ</li>
                            <li className="link">Contact</li>
                            <li className="link">Terms</li>
                            <li className="link">Privacy</li>
                            <li className="link">Testimonials</li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3 className="links__title">Community</h3>
                        <ul className="links_inner">
                            <li className="link">Blog</li>
                            <li className="link">Forum</li>
                            <li className="link">Support</li>
                            <li className="link">Newsletter</li>
                        </ul>
                    </div>
                    <div className="from-blog">
                        <h3 className="from-blog__title">
                            from the
                            <span className='from-blog__title_bold'>Blog</span>
                        </h3>
                        <div className="from-blog__items">
                            <div className="from-blog__item">
                                {/*<img src={} alt="" className="from-blog__img"/>*/}
                                <div className="from-blog__img"></div>
                                <div className="from-blog__content">
                                    <p className="from-blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <p className="from-blog__time">26 May, 2013</p>
                                </div>
                            </div>
                            <div className="from-blog__item">
                                {/*<img src={} alt="" className="from-blog__img"/>*/}
                                <div className="from-blog__img"></div>
                                <div className="from-blog__content">
                                    <p className="from-blog__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <p className="from-blog__time">26 May, 2013</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__inner2">
                <div className="container">
                    <p className="footer__copyright">© 2013 ModusVersus</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;