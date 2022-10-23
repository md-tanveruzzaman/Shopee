import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Cart } from "../../Component/Cart/Index";
import { ProfileDropdown } from "../../Component/ProfileDropdown/Index";
import { Search } from "../../Component/Search/Search";

export const RightNav = () => {
    return (
        <div className="navbar align-self-center d-flex">
            <Search />

            <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <FontAwesomeIcon icon="fa-search" className="mr-2 text-dark" />
            </a>

            <Cart />

            <ProfileDropdown />


            <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                                <FontAwesomeIcon icon="fa-search" className="text-white" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}