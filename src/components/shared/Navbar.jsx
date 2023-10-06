import { Link } from "react-router-dom"
import { BsBookmark } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href={'/'}>
                <img src="/img/crunchyroll-logo-0.png" style={{width:'100px'}} alt="..."/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/explorar'}>Explorar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/favoritos'}>Favoritos</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <a className="text-white" style={{fontSize:'1.5rem'}}><BiSearch/></a>
                    <a className="text-white ml-1" style={{fontSize:'1.5rem'}}><BsBookmark/></a>
                </form>
            </div>
        </div>
    </nav>
  )
}
