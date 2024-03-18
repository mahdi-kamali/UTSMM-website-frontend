import { Icon } from "@iconify/react"


import avatar from "../../../images/footer/avatar.svg"
import Lottie from "react-lottie-player"



import footerAnimation from "../../../animations/main-page/footer-animation.json"
import {Link, useNavigate} from "react-router-dom"


const Footer = () => {

  footerAnimation.fr = 10

  const navigator = useNavigate()



  const handleClick = (path) => {
    navigator(path)
  }


  return (
    <footer>
      <div className="left">
        <h1>
          Take your social media game to the next level with UTSMM!
        </h1>
        <div className="social-media">
          <Link to={'/'} className="item">
            <Icon icon="iconoir:internet" />
            <span>WWW.UTSMM.COM</span>
          </Link>
          <Link to={'https://instagram.com/UT_SMM'} className="item">
            <Icon icon="formkit:instagram" />
            <span>@UT_SMM</span>
          </Link>
          <Link to={'https://telegram.com/UT_SMM'} className="item">
            <Icon icon="ic:twotone-telegram" />
            <span>@UT_SMM</span>
          </Link>
        </div>
      </div>
      <div className="right">
        <ul>
          <h1>Quick Links</h1>
          <Link to={"/faqs"}>FAQ</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </ul>

        <ul>
          <h1>Support</h1>
          <Link to={'/docs'}>API DOCS</Link>
          <Link to={'/tickets'}>Tickets</Link>
          <Link to={'/terms'}>Terms & Conditions</Link>
          <Link to={'/privacy'}>Privacy Policy</Link>
          <Link to={'/policy'}>Refund Policy</Link>
        </ul>
      </div>
      <img className="avatar" src={window.location.origin + '/6.svg'} alt="" />

    </footer>
  )
}

export default Footer