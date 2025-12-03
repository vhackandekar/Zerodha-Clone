export default function Footer(){
    return(
        <footer className="bg-white py-5" style={{borderTop: '1px solid #e9ecef'}}>
            <div className="container-fluid px-3 px-md-5">
                {/* Main Footer Content */}
                <div className="row g-4 mb-5">
                    {/* Left: Branding & Social */}
                    <div className="col-12 col-md-2 mb-4 mb-md-0">
                        <div className="mb-4">
                            <h5 className="fw-bold text-dark" style={{fontSize: '1.5rem'}}>
                                <i className="fas fa-chart-line me-2" style={{color: '#1e88e5'}}></i>
                                <span style={{color: '#1e88e5'}}>ZERODHA</span>
                            </h5>
                        </div>
                        <p className="small text-dark mb-3">
                            © 2010 - 2025, Zerodha Broking Ltd.<br/>
                            All rights reserved
                        </p>
                        <div className="d-flex gap-2 flex-wrap">
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#" className="text-dark text-decoration-none" style={{fontSize: '1.2rem'}}>
                                <i className="fab fa-telegram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="col-12 col-sm-6 col-md-2">
                        <h6 className="fw-bold text-dark mb-3">Account</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Open demat account</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Minor demat account</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">NRI demat account</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Commodity</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Dematerialisation</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Fund transfer</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">MTF</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Referral program</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-12 col-sm-6 col-md-2">
                        <h6 className="fw-bold text-dark mb-3">Support</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Contact us</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Support portal</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">How to file a complaint?</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Status of your complaints</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Bulletin</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Circular</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Z-Connect blog</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Downloads</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-12 col-sm-6 col-md-2">
                        <h6 className="fw-bold text-dark mb-3">Company</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">About</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Philosophy</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Press & media</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Zerodha Cares (CSR)</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Zerodha.tech</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Open source</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-sm-6 col-md-2">
                        <h6 className="fw-bold text-dark mb-3">Quick links</h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Upcoming IPOs</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Brokerage charges</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Market holidays</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Economic calendar</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Calculators</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Markets</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Sectors</a></li>
                        </ul>
                    </div>
                </div>

                <hr style={{borderColor: '#e9ecef'}} />

                {/* Bottom Info */}
                <div className="row mb-4">
                    <div className="col-12">
                        <p className="small text-secondary mb-3">
                            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-decoration-none">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-decoration-none">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | <a href="#" className="text-decoration-none">ICF</a>
                        </p>
                        <p className="small text-secondary mb-3">
                            Procedure to file a compliant on SEBI SCORES: Register on SCORES portal, Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID, Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>
                        <p className="small">
                            <a href="#" className="text-primary text-decoration-none">Smart Online Dispute Resolution</a> | <a href="#" className="text-primary text-decoration-none">Grievances Redressal Mechanism</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}