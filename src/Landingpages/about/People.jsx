import img1 from '../../assets/nithinKamath.jpg'
export default function People(){
    return(
        <div className="container-fluid py-4 py-md-5 px-3 px-md-5 ">
            <div className="row">
                <div className='text-center'>
                    <h2>People</h2>
                </div>
                <div className="col-lg-5 col-12 col-md-6 text-center p-3 p-md-4 p-lg-5">
                    <img src={img1} alt="" style={{borderRadius:"100%",maxWidth:'75%', height:'auto'}}/>
                    <div className='mt-4'>
                        <h5>Nithin Kamath</h5>
                    </div>
                    <div>
                        <p>Founder, CEO</p>
                    </div>
                </div>
                <div className="col-lg-5 col-12 col-md-6 p-3 p-md-4 p-lg-5 my-auto">
                    <div>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    </div>
                    <div>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    </div>
                    <div>
                        <p>Playing basketball is his zen.</p>
                    </div>
                    <div>
                        <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}