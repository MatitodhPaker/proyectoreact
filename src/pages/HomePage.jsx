import { Carrusel } from "../components/carrusel/Carrusel"
import { MainLayout } from "../layaouts/MainLayout"

export const HomePage = () => {
  return (
    <MainLayout>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Carrusel/>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}
