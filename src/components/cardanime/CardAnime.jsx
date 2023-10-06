import { BsPlay } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
export const CardAnime = ({anime}) => {
    return (
        <div className="col-sx-12 col-sm-4 col-md-3">
            <div className="cardanime card bg-dark">
                <img src={anime.img} className="card-img-top" alt="..." />
                <strong>
                    {anime.nombre}
                    <br />
                    {anime.audios}
                </strong>
                <span className="text-justyfi">
                    <div className="row">
                        {anime.nombre}
                        <br />
                        {anime.descripcion}
                        <br />
                        <p style={{ color: 'orange',fontSize:'1.5rem' }}>
                            <BsPlay /><BsBookmark /><AiOutlinePlus />
                        </p>
                    </div>
                </span>
            </div>
        </div>
    )
}
