export default function ProductRight({imgage,name,desc,trydemo,learnmore,link1,link2}){
    return(
          <div className="container-fluid  py-4 py-md-5 px-3 px-md-5 ">
            <div className="row">
                 <div className="col-12 col-md-6 col-lg-4 p-3 p-md-4 p-lg-5 my-auto ">
                   <h2>{name}</h2>
                   <p>{desc}</p>
                   <div className="mb-lg-4 mb-md-3 mb-2">
                     <a href={trydemo} className="mx-5 ">Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                     <a href={learnmore}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                   </div>
                   <div className="d-flex  gap-3">
                    <img src={link1} alt="" className="" />
                    <img src={link2} alt="" />
                   </div>
                </div>
                <div className="col-12 text-center col-md-6 col-lg-7 ">
                   <img src={imgage} alt={name}  style={{maxWidth:'100%',height:'auto'}}/>
                </div>
               
            </div>
        </div>
    )
}