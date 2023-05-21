export function Header() {
    return (
        <header className='header'>
            <nav className='navbar navbar-header navbar-container navbar-light bg-dark'>
                <div className='container-fluid container-fluid-content'>
                    <a className='navbar-brand text-info' href='#'>
                        <img
                            className='logo-image'
                            src='./icons/movie-camera.png'
                            alt='Movie icon'
                        />
                        Movies
                    </a>
                    <div className='nav-menu'>
                        <div
                            className='collapse show-off'
                            id='navbarToggleExternalContent'
                        >
                            <div className='bg-dark p-4 padding-0'>
                                <a
                                    className='link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    About
                                </a>
                                <a className='link' href='#'>
                                    Repo
                                </a>
                            </div>
                        </div>
                        <nav className='navbar padding-0 navbar-dark bg-dark'>
                            <div className='container-fluid container-fluid-nav-menu'>
                                <button
                                    className='navbar-toggler'
                                    type='button'
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                'navbarToggleExternalContent'
                                            )
                                            .classList.toggle('show')
                                    }
                                >
                                    <span className='navbar-toggler-icon'></span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    );
}
