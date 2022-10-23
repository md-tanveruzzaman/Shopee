import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Search = () => {
    return (
        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
            <div className="input-group">
                <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                <div className="input-group-text">
                    <FontAwesomeIcon icon="fa-search" className="mx-2" />
                </div>
            </div>
        </div>
    )
}