import { CardAnime } from "../components/cardanime/CardAnime"
import { popularData } from "../data/explorarData"
import { MainLayout } from "../layaouts/MainLayout"

export const Explorar = () => {
  return (
    <>
        <MainLayout>
            <div className="container-fluid bg-dark">
              <div className="row">
                <div className="col">
                  <h1 className="text-white">Lo mas Popular</h1>
                </div>
                <div className="col">
                  
                </div>
              </div>
              <div className="row">
                {
                  popularData.map((anime,index)=>{
                    return <CardAnime key={index} anime={anime}/>
                  })
                }
              </div>
            </div>
        </MainLayout>
    </>
  )
}
