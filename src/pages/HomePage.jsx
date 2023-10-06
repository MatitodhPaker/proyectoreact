import { Anuncio } from "../components/anuncios/Anuncio"
import { Carrusel } from "../components/carrusel/Carrusel"
import { CarruselCard } from "../components/carruselCard/CarruselCard"
import { MainLayout } from "../layaouts/MainLayout"
export const HomePage = () => {
  return (
    <MainLayout>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col">
              <Carrusel/>
              <h1 className="text-white mt-5">Sugerencias para ti</h1>
              <CarruselCard/>
              <Anuncio/>
              <h1 className="text-white mt-5">Lo mas popular</h1>
              <CarruselCard/>
            </div>
          </div>
        </div>
    </MainLayout>
  )
}
