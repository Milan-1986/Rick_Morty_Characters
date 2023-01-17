import { NavLink } from "react-router-dom"

export function Navbar() {
    let activeStyle = {
        textDecorationLine: "underline overline",
      };

    return (

        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-secondary">
                <div className="container">
                    <div className="heading">Rick and Morty characters status:</div>
                    <button className="navbar-toggler danger" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex flex-wrap justify-content-center ms-auto">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/"
                                        style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                      }
                                    >
                                        Any</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/alive"
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                  }
                                    >Alive</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/dead"
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                  }
                                    >Dead</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/unknown"
                                    style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                  }
                                    >Unknown</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}