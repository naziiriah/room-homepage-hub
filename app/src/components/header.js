import { useState } from "react/cjs/react.development";
import HeadStyle from "../styles/header.style";
import logo from '../images/icon-arrow.svg';
import image1 from '../images/desktop-image-hero-1.jpg';
import image2 from '../images/desktop-image-hero-2.jpg';
import image3 from '../images/desktop-image-hero-3.jpg';
import  faCoffee  from 'react-icons/fa'



const Tag = [
  {
    title:'Discover innovative ways to decorate',
    description:'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    img:image1,
  },
  {
    title:'We are available all across the globe',
    description:'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.',
    img:image2,
  },
  {
    title:'Manufactured with the best materials',
    description:'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    img:image3,
  },
]
// An array of objects that responds dynamically to events

let x = 0;
// for itereation of the above array

const Header = () => {
  const [list, setlist] = useState(Tag[x])
  // to track the states of the websites
  
  function changeImage(){
    x++;
    x>2 ? setlist(Tag[x=0]) :  setlist(Tag[x])
    // the loop 
  }

  function decreaseImage(){
    x--
    x < 0 ? setlist(Tag[x=2]) : setlist(Tag[x])
    // the loop 
  }

    return (
        <HeadStyle>
          <header className='head-section'>
            <div className="image-section"><img className='head-background' src={list.img} alt="" /></div>
              <nav className='nav-bar'> 
                <p className="logo-name">room</p>
                <ul className="list">
                  <li className='listed-item'>home</li>
                  <li className='listed-item'>shop</li>
                  <li className='listed-item'>about</li>
                  <li className='listed-item'>contact</li>
                </ul>
              </nav>
          </header>    
          
          <main className='main-section'>
            <h1 className="title">{list.title}</h1>
            <h3 className='follow-text'>{list.description}</h3>
             <div className="shop-text">
               <p className="text">shop now</p>
               <p className="img"><img src={logo} alt="arrow pointing" /></p>

              </div>
              <div className="button-section">
                  <button className="btn" onClick={decreaseImage}>< faCoffee /></button>              
                  <button className="btn" onClick={changeImage}></button>
              </div>          
          </main>
          </HeadStyle>
      );
    
}
 
export default Header;