import { BsPlay } from 'react-icons/bs';
export const Cardfavoritos = ({anime}) => {
    return (
        <div className="col-sx-12 col-sm-4 col-md-3">
            <div className="cardanime card bg-dark">
                <img src={anime.img} className="card-img-top" alt="..." />
                <strong>
                    {anime.nombre}
                    <br />
                    Comenzar a ver
                    <br />
                    {anime.audios}
                </strong>
                <span className="text-justyfi">
                    <div className="row">
                        <button type="button" className="btn btn-outline-primary"><BsPlay /></button>
                    </div>
                </span>
            </div>
        </div>
    )
}
