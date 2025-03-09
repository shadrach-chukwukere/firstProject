import { Alert } from "reactstrap"
import domainNotFound from '../assets/image/domainNotFound.png'


export default function AlertUnavailable(){
    return(
        <div>
            <Alert className='alertbuyDomainUnavailable d-flex justify-content-between align-items-center'>
                    <div>
                      <img src={domainNotFound} alt='X' className='me-1 domainNotFoundIcon'/>
                      <span className='soft me-2'>mortalweb.com</span>
                      <span className='strong'>is not available</span>
                      </div>
                </Alert>
        </div>
    )
}