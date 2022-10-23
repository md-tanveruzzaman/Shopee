import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Cart = () => {
    let cartCount = 0;
    return (
        <a className="nav-icon position-relative text-decoration-none" href="#">
            <FontAwesomeIcon icon="fa-cart-arrow-down" className="mr-1 text-dark" />
            <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{cartCount}</span>
        </a>
    )
}