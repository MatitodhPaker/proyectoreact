import { BsFillPlayFill } from 'react-icons/bs';
export const ItemsCarrusel = ({anime,index}) => {
  return (
    <div className={index==0?"carousel-item active":"carousel-item"}>
    <div className="card bg-dark">
            <img src={anime.img} className="card-img img-fluid" alt="..."/>
            <div className="card-img-overlay offset-1 text-white mt-5" >
                <img src={anime.titulo} className="img-responsive w-50 mt-5"  alt="..."/>
                <p className="card-text" style={{backgroundColor:'rgba(0,0,0,0.1)'}}>{anime.descripcion}</p>
                <button type="button" className="btn btn-outline-danger">Comenzar a ver <BsFillPlayFill /></button>
            </div>
        </div>
    </div>
  )
}
