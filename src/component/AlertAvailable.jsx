import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import flowbiteCartSolidplane from '../assets/image/flowbite_cart-solid-plane.png'
import { Alert } from "reactstrap";
<IoIosCheckmarkCircleOutline />


export default function AlertCard(){
    return(
        <div>
             <Alert className='alertbuyDomainAvailable d-flex justify-content-between align-items-center'>
                    <div>
                    <IoIosCheckmarkCircleOutline className='me-1 domainNotFoundIcon'/>
                      <span className='soft me-2'>mortalweb.com</span>
                      <span className='strong'>is not available</span>
                      </div>
                      <div className='bg-white addToCartBoxBuyDomain'>
                      <span className='addDomainToCart'><img src={flowbiteCartSolidplane} />Add to Cart</span>
                      </div>
                </Alert>
        </div>
    )
}