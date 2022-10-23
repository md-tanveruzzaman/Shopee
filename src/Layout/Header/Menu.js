import { RightNav } from "./RightNav";

export const Menu = () => {
    const menu = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'About',
            route: 'about'
        },
        {
            label: 'Shop',
            route: 'shop'
        },
        {
            label: 'Contact',
            route: 'contact'
        },
    ];

    const menuItems = menu.map((m, number) => {
        return [
            <li className="nav-item" key={number.toString()}>
                <a className="nav-link" href={m.route}>{m.label}</a>
            </li>
        ]
    });


    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">

                <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
                    Shopee
                </a>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            {menuItems}
                        </ul>
                    </div>
                    
                    <RightNav />
                </div>

            </div>
        </nav>
    )
}