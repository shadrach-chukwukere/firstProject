import { useState } from 'react'
import searchIcon from '../assets/image/searchIcon.png'
import cancelIconImg from '../assets/image/cancelIcon.svg'
import flowbiteCartSolidplane from '../assets/image/flowbite_cart-solid-plane.png'
import { Alert } from 'reactstrap'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function BuyDomain(){
 
    const [search,setSearch] = useState("")
    const [cancelIcon, showCancelIcon] = useState(false)

    const searchInputChangerHandler = (e) =>{
        setSearch(e.target.value)
        if(e.target.value == ""){
            showCancelIcon(false)
        }
        else{
            showCancelIcon(true)
        }
    }

    const clear = () => {
        showCancelIcon(false)
        setSearch("")
    }


     
 

   
  
    return(
        <div>
            <div className="container-fluid">
                <div className="container input-group flex-nowrap mb-4 p-1 buyDomainInputGroup">
                    <span className='input-group-text pt-0 pb-0 p-2 pe-3 input-group-text-buyDomain'>
                        <img src={searchIcon} alt="icon" className='buyDomainSearchIcon'/>
                    </span>
                    <input type="search" autoFocus className='w-100 domainSearcInput' value={search} onChange={searchInputChangerHandler} placeholder='mortalweb.com'/>
                    {cancelIcon && <span className='input-group-text pt-0 pb-0 p-2 pe-3 input-group-text-buyDomain' onClick={clear}> 
                        <img src={cancelIconImg} alt="icon" className='cancelIcon'/>
                    </span>
                    }
                </div>
                <div className="container p-0">
                <Alert className='alertbuyDomainAvailable d-flex flex-wrap justify-content-between align-items-center'>
                    <div>
                     <div className="d-flex">
                      <div className="">
                      <IoIosCheckmarkCircleOutline className='me-1 domainNotFoundIcon'/>
                      </div>
                      <div className="">
                      <span className='soft me-2'>mortalweb.com</span>
                      <span className='strong'>is not available</span>
                      </div>
                     </div>
                   
                     

                      </div>
                      <div className='bg-white addToCartBoxBuyDomain m-2'>
                      <span className='addDomainToCart'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                </Alert>
                </div>
                <div className="explore container mb-3">Explore these suggestions</div>

                <div className="container buyDomainList mb-4">
                     <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist">
                        <div className='domainList align-items-center'>mortalweb<strong>.net</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0 mb-3'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist">
                        <div className='domainList align-items-center'>mortalweb<strong>.net</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                    </div>
                    </div>
                    <hr className='m-0 mb-3'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist">
                        <div className='domainList align-items-center'>mortalweb<strong>.info</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                    </div>
                    </div>
                    <hr className='m-0 mb-3'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist">
                        <div className='domainList align-items-center'>mortalweb<strong>.xyz</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0 mb-3'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.org</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.co</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.io</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>

                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.online</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>
                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.ai</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>
                    <div>
                    <div className="container-fluid d-flex justify-content-between mt-2 mb-2 wrappist mb-2">
                        <div className='domainList align-items-center'>mortalweb<strong>.biz</strong></div>
                        <div className='d-flex align-items-center gap-3 justify-content-between domainAmount'><span className='domainListAmount'>N9,000</span>
                        <div className='addToCartBoxBuyDomainGreen'>
                      <span className='addDomainToCartGreen'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                      </div>
                    </div>
                    <hr className='m-0'/>
                    </div>

                </div>
                 
            </div>
            <div className="container-fluid d-flex justify-content-between align-items-center p-3 chekOutDomainContainer">
                    <div className="addDomainToCartMessage"><span>1</span> domain added to cart</div>
                    <div className="">
                    <div className='checkDomainOutBox'>
                      <span className='addDomainToCartGreen d-flex align-items-center gap-2'><img src={flowbiteCartSolidplane} /><span>Checkout</span></span>
                    </div>
                    </div>
                 </div>
        </div>
    )
}