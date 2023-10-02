import { Navbar } from "../components/shared/navbar"

export const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
