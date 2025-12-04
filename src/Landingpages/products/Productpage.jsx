import Heros from "./Heros"
import ProductLeft from "./ProductLeft"
import ProductRight from "./ProductRight"
import Universe from "./Universe"
import image from "../../assets/kite.png"
import link1 from "../../assets/googlePlayBadge.svg"
import link2 from "../../assets/appstore-badge.svg"
import img2 from "../../assets/console.png"
import img3 from "../../assets/coin.png"
import img4 from "../../assets/kiteconnect.png"
import img5 from "../../assets/varsity.png"

export default function Productpage(){
    return(
        <div>
            <Heros />
            <ProductLeft imgage={image} name="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="" learnmore="" link1={link1} link2={link2} />
            <ProductRight imgage={img2} name="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." trydemo="" learnmore="" link1={link1} link2={link2} />
            <ProductLeft imgage={img3} name="Coin" desc="Buy and sell mutual funds with zero commission. Coin offers a simple and transparent platform for your mutual fund investments." trydemo="" learnmore="" link1={link1} link2={link2} />
            <ProductRight imgage={img4} name="Kite Connect" desc="A set of REST-like APIs that let you build your own trading platforms and tools. Access real-time market data, place orders, and manage your portfolio programmatically." trydemo="" learnmore="" link1={link1} link2={link2} />
            <ProductLeft imgage={img5} name="Varsity Mobile" desc="The largest online stock market education book in the world. Learn everything from the basics to advanced trading concepts with our comprehensive modules." trydemo="" learnmore="" link1={link1} link2={link2} />
            <Universe />
        </div>
    )
}