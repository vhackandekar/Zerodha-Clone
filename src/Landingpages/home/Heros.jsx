import img1 from '../../assets/landing.svg'
export default function Heros(){
    return(
        <div className="container-fluid text-center py-4 py-md-5 px-3 px-md-5">
            <div className="row">
                <div className="col-12">
                    <img src={img1} alt="Hero Banner" className='img-fluid mx-auto d-block p-2 p-md-3' style={{maxWidth:'100%', height:'auto'}}/>
                    <h1 className='mt-3 mt-md-4 fs-3 fs-md-2'>Invest in everything</h1>
                    <p className='mb-3 mb-md-4 px-2 px-md-0'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary btn-sm btn-md py-2 px-3 px-md-4'>Sign up for free</button>
                </div>
            </div>
        </div>
    )
}