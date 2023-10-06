import { Cardfavoritos } from "../components/cardfavoritos/Cardfavoritos";
import { favData } from "../data/favoritosData";
import { MainLayout } from "../layaouts/MainLayout"
import { BsBookmark } from 'react-icons/bs';
export const Favoritos = () => {
  return (
    <>
      <MainLayout>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col">
              <h1 className="text-white text-center"><BsBookmark/>Mis favoritos</h1>
            </div>
          </div>
          <div className="row">
            {favData.map((anime,index)=>{
              return <Cardfavoritos key={index} anime={anime}/>
            })}
          </div>
        </div>
      </MainLayout>
    </>
  )
}
