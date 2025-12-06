import img1 from "../../assets/pricing0.svg"
import img2 from "../../assets/intradayTrades.svg"
export default function Charges(){
    return(
        <div className="container-fluid py-4 py-md-5 px-3 px-md-5 ">
        <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4 p-lg-5 p-md-4 p-3 d-flex flex-column justify-content-center">
                <div>
                <img src={img1} alt="" style={{maxWidth:'50%',height:'auto'}}/>
                </div>
                 <div>
                    <h2 className="fs-3 fs-md-2">Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                 </div>
               
               
            </div>
             <div className="col-12 col-md-6 col-lg-4 p-lg-5 p-md-4 p-3 d-flex  flex-column justify-content-center">
                <div>
                <img src={img2} alt="" style={{maxWidth:'50%',height:'auto'}}/>
                </div>
                 <div>

                <h2 className="fs-3 fs-md-2">Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                 </div>
            </div>
                     <div className="col-12 col-md-6 col-lg-4 p-lg-5 p-md-4 p-3 d-flex flex-column justify-content-center">
            <div>

                <img src={img1} alt="" style={{maxWidth:'50%',height:'auto'}}/>
            </div>
            <div>
                <h2 className="fs-3 fs-md-2">Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
               </div>
            </div>
                </div>
            </div>  

      
    )
}