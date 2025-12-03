import img1 from "../../assets/pricing0.svg"
import img2 from "../../assets/intradayTrades.svg"
export default function Price() {
  return (
    <div className="container-fluid py-4 py-md-5 px-3 px-md-5">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center">
          <h2 className="fs-3 fs-md-2">Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" className="text-decoration-none">See pricing  <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <div className="row g-3 g-md-4">
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column flex-sm-row">
              <div className="me-2 mb-2 mb-sm-0">
                <img src={img1} alt="Free account" className="img-fluid" style={{ maxWidth: '100px', width:'100%' }} />
              </div>
              <div>
                <p className="mb-0">Free account opening</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column flex-sm-row">
              <div className="me-2 mb-2 mb-sm-0">
                <img src={img2} alt="Free equity" className="img-fluid" style={{ maxWidth: '100px', width:'100%' }} />
              </div>
              <div>
                <p className="mb-0">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column flex-sm-row">
              <div className="me-2 mb-2 mb-sm-0">
                <img src={img1} alt="Intraday" className="img-fluid" style={{ maxWidth: '100px', width:'100%' }} />
              </div>
              <div>
                <p className="mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}