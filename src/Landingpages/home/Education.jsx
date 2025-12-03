import img1 from '../../assets/education.svg'
export default function Education(){
    return(
       <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
        <div className="row g-4 align-items-center">
            <div className="col-12 col-md-6 col-lg-5">
                <img src={img1} alt="Education" className="img-fluid w-100"/>
            </div>
            <div className="col-12 col-md-6 col-lg-7 p-3 p-md-4 p-lg-5">
               <div className="mb-4 mb-md-5">
                 <h2 className="fs-3 fs-md-2 mb-3">Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" className="text-decoration-none">Varsity <i className="fa-solid fa-arrow-right"></i></a>
               </div>
               <div>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" className="text-decoration-none">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>
        </div>
       </div>
    )
}