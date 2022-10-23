import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileDropdown = () => {
    return (
        <a className="nav-icon position-relative text-decoration-none" href="#">
            <FontAwesomeIcon icon="fa-user" className="mr-3 text-dark" />
            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
        </a>
    )
}