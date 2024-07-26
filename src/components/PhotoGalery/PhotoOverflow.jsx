import "./photooverflow.css"

const PhotoOverflow = (propsss) => {
    return ( 
        <div className="overflow">
            <div className="overflow-inner">
                <img src={propsss.src} alt="" className="img-fluid" />
            </div>
        </div>
     );
}
 
export default PhotoOverflow;