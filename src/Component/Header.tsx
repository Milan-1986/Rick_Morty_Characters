function Header({handleSearch}: {handleSearch: any}) {

    return (
        <div className="container ">
            <div className="d-flex bg-secondary justify-content-around p-3 rounded-bottom rounded-pill shadow">
                <div className="d-none d-sm-block" id="">
                    <a href="https://www.freepnglogos.com/pics/rick-and-morty" title="Image from freepnglogos.com">
                        <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-vector-clam-hell-deviantart-10.png" alt="rick and morty vector clam hell deviantart" id="logoPicture"/></a>
                </div>

                <form role="search" className="align-self-end">
                    <input className="form-control me-3 height-25px" type="search" placeholder="Search character by name" aria-label="Search"
                    onChange={handleSearch}
                    />
                </form>
            </div>
        </div>


    )
}
export default Header;