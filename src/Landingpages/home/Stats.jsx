import img1 from '../../assets/ecosystem.png'
import img2 from '../../assets/pressLogos.png'
export default function Stats(){
    return(
        <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
            <div className="row g-4">
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
                    <h2 className="fs-3 fs-md-2">Trust with confidence</h2>
                    <div className='mt-3 mt-md-4'>
                        <h3 className="fs-5">Customer-first always</h3>
                        <p className="small">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mt-3'>
                        <h3 className="fs-5">No spam or gimmicks</h3>
                        <p className="small">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="" className="text-decoration-none">Our philosophies.</a> </p>
                    </div>
                    <div className='mt-3'>
                        <h3 className="fs-5">The Zerodha universe</h3>
                        <p className="small">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mt-3'>
                        <h3 className="fs-5">Do better with money</h3>
                        <p className="small">With initiatives like <a href="" className="text-decoration-none">Nudge</a> and <a href="" className="text-decoration-none">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-7">
                    <img src={img1} alt="Ecosystem" className="img-fluid w-100 mb-3 mb-md-4"/>
                    <div className='text-center d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-5'>
                        <a href="" className='text-decoration-none'>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="" className='text-decoration-none'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mt-md-5">
                <div className="col-12 text-center">
                    <img src={img2} alt="Press logos" className="img-fluid" style={{maxWidth:'100%', height:'auto'}}/>
                </div>
            </div>
        </div>
    )
}