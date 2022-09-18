import './index.scss'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default function Header({headerTitle='ikart', headerText='Welcome to ikart', activePage="home"}) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="ikart"  height="40" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'home' && 'active'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'watch' && 'active'}`} to="/watch">Watch</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'product' && 'active'}`} to="/product">iPhone</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link ${activePage === 'contact' && 'active'}`} to="/contact">Contact</Link>
                            </li> 
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <div className='bg-secondary text-white'>
                <div className='container p-5'>
                <img src={Logo} alt="Reebok"  height="40" />
                    <h1>{headerTitle}</h1> 
                    <p>{headerText}</p>
                </div>
                
            </div>
        </header>
    )
}