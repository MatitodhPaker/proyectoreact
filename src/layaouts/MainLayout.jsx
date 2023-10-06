import { Footer } from "../components/shared/Footer"
import { Navbar } from "../components/shared/Navbar"
export const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}
