import img1 from '../../assets/zerodhaFundhouse.png'
import img2 from '../../assets/sensibullLogo.svg'
import img3 from '../../assets/streakLogo.png'
import img4 from '../../assets/smallcaseLogo.png'
import img5 from '../../assets/dittoLogo.png'
import img6 from '../../assets/goldenpiLogo.png'
export default function Universe() {
    return (
        <div className="container-fluid py-4 py-md-5 px-3 px-md-5 text-center">
            <div className="row">
                <div>
                    <h2>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div className="col-lg-4 col-12 col-md-6 d-flex flex-column align-items-center mb-4 mt-3">
                    <div className="p-3 p-md-4 p-lg-4 mb-4 " style={{ maxWidth: '300px' }}>
                        <img src={img1} alt="Zerodha Fundhouse" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />

                        <p className="small">Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>

                    <div className=" p-3 p-md-4 p-lg-4 mb-4" style={{ maxWidth: '300px' }}>
                        <img src={img3} alt="Streak" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />
                        <p>Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12 col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="p-3 p-md-4 p-lg-4 mb-4 " style={{ maxWidth: '300px' }}>
                        <img src={img2} alt="Zerodha Fundhouse" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />

                        <p className="small"> Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </div>

                    <div className=" p-3 p-md-4 p-lg-4 mb-4" style={{ maxWidth: '300px' }}>
                        <img src={img4} alt="Streak" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />
                        <p>Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12 col-md-6 d-flex flex-column align-items-center mb-4">
                    <div className="p-3 p-md-4 p-lg-4 mb-4 " style={{ maxWidth: '300px' }}>
                        <img src={img5} alt="Zerodha Fundhouse" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />

                        <p className="small">Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                            Sign up for free
                        </p>
                    </div>

                    <div className=" p-3 p-md-4 p-lg-4 mb-4" style={{ maxWidth: '300px' }}>
                        <img src={img6} alt="Streak" className="img-fluid mb-3" style={{ maxWidth: '150px', height: 'auto' }} />
                        <p>Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}