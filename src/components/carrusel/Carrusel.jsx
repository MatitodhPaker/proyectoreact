import { carruselData } from '../../data/homeData';
import { ItemsCarrusel } from './ItemsCarrusel';
import { Slides } from './Slides';
export const Carrusel = () => {
return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {carruselData.map((anime,index)=>{
                return <Slides key={index} index={index}/>
            })}
        </div>
        <div className="carousel-inner">
            {carruselData.map((anime,index)=>{
                return <ItemsCarrusel key={index} anime={anime} index={index}/>
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
)
}

