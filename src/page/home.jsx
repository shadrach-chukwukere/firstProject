
import identifyCard from '../assets/image/identify-card.png'
import brandBumble from '../assets/image/brandBumble.png'
import suitCase from '../assets/image/suitcase.png'
import heroImg from '../assets/image/rectangle.png'
import searchIcon from '../assets/image/searchIcon.png'
import guarantee from '../assets/image/guarantee.png'
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from 'react-use'






export default function Home(){

const navigate = useNavigate()
const gotoBuyDomain = () =>{
navigate('/buy-domain')
}

const { width } = useWindowSize()

    return(
      <div>
        <Link to="/buy domain" id='linkToByDomain' className='d-none'></Link>
        <div className='container-fluid'>
          <div className="container-fluid p-4 hero"style={{backgroundImage:`url(${heroImg})`}}>
            <p className='text-center heroText container fs-md-5'>Find the perfect domain name and get it registered in naira.</p>
            <div className="container w-100 justify-content-flexstart input-group flex-nowrap heroSearch" onClick={gotoBuyDomain}>
              <span className='p-0 input-group-text input-group-text-home' id='input-group-text'>
                 <img src={searchIcon} alt='@' className='searchIcon'/>
              </span>
              <input type="text" placeholder='Search you domain here' name="domainSearch" id="domainSearchInput" className=' domainSearch' height="64px" aria-describedby='input-group-text'/>
              <span>
                <div className='searchBtn' id='domainSearchBtn'>{width < 768 ? "search" : "search domain"}</div>
              </span>
            </div>
            <div className="container">
              <p className='text-center container heroTextDown'>Search and buy the perfect domain name for your business. Get your .com for as low as N13,000.</p>
            </div>
          </div>
      </div>
        <div className="ben">
            <div className="container">
            <div className="text-center benText p-4 mb-4">Benefits</div>
            <div className="row">
                <div className="col-lg-6 mb-3  pb-0 p-3 p-lg-4">
                   <div className="d-flex align-items-center">
                   <img src={identifyCard} alt='card' className='benImage me-3'/>
                   <div className="">
                   <p className='unique'>Unique Online Identity</p>
                    <p className='virt'>Stand out from the crowd with a premium domain that reflects your brand`s values and personality.</p>
                   </div>
                   </div>
                </div>
                <div className="col-lg-6 mb-3 pb-0 p-3 p-lg-4">
                <div className="d-flex align-items-center">
                <img src={guarantee} alt='card' className='benImage me-3'/>
                <div className="">
                <p className='unique'>Increased Credibility</p>
                    <p className='virt'>A memorable and easy-to-spell domain can boost your website`s credibility and trustworthiness.</p>
                
                </div>
                </div>
                </div>
                <div className="col-lg-6 mb-3 pb-0 p-3 p-lg-4">
                    <div className="d-flex align-items-center">
                    <img src={suitCase} alt='card' className='benImage me-3'/>
                    <div className="">
                    <p className='unique'>Long Term Investment</p>
                    <p className='virt'>A premium domain can appreciate in value over time, making it a valuable asset for your business.</p>
                
                    </div>
                   </div>
                </div>
                <div className="col-lg-6 pb-0 p-3 p-lg-4">
                <div className="d-flex align-items-center">
                <img src={brandBumble} alt='card' className='benImage me-3'/>
                <div className="">
                <p className='unique'>Improved Branding</p>
                    <p className='virt'>A premium domain can enhance your bran image and make it more recognizable.</p>
                
                </div>
                </div>
                </div>
        </div>
        </div>  
            </div>
            <div>
            <div className="container-fluid why">
                <p className="text-center whyHead">Why Mortalweb?</p>
                <div className="container text-center p-2 p-lg-3 whyText">In a crowded domain sales market, it can be difficult to know who to trust. Here are just a few reasons why Mortalweb stands out from the rest:</div>
            </div>
        </div>
      </div>
    )
}





    