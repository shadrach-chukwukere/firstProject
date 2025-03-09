export default function Cart(){
    return(

        
        <div className="p-2">
            <div className="container-fluid cartCard p-4">
                <div className="row pb-4 justify-content-between">

                    <div className="d-flex justify-content-between col-lg-5 mb-md-0 mb-2 flex-wrap align-items-center">
                        <div className="w-50">
                        <div className="cartBold">mortalweb.com</div>
                        <div className="cartLyte">Domain Registration</div>
                        </div>
                        <select name="" id="" className="col-lg-3 select-form selectForm">
                            <option value="">1 year</option>
                            <option value="">2 year</option>
                        </select>
                </div>

                <div className="justify-content-between d-flex col-lg-5 mb-md-0 mb-2 flex-wrap">
                    <div className="cartBold">N9,000/year</div>
                    <div className="p-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></div>
                </div>

                </div>

                <div className="d-flex flex-wrap vatPlace">
                    <div className="col-7 cartLyte">VAT (7.5%)</div>
                    <div className="col-5 cartLyte">N2,000</div>
                </div>
                <hr className="mb-0"></hr>

                <div className="row totalPlace flex-wrap">
                    <div className="col-lg-7 totalPlaceTitle">Total</div>
                    <div className="col-lg-5 cartLyte totalPlaceValue">N11,000</div>
                </div>
                </div>
            </div>





    )
}