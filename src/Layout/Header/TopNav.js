import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialIcons = [
    {
        url: 'https://fb.com/templatemo',
        fontAwesome: ["fab","facebook"]
    },
    {
        url: 'https://fb.com/templatemo',
        fontAwesome: ["fab","google"]
    },
    {
        url: 'https://fb.com/templatemo',
        fontAwesome: ["fab","linkedin"]
    },
    {
        url: 'https://fb.com/templatemo',
        fontAwesome: ["fab","twitter"]
    }
];

const socialIconsList = socialIcons.map((social, index) => {
    return [
        <a className="text-light" href={social.url} target="_blank" key={index.toString()}>
            <FontAwesomeIcon icon={social.fontAwesome} className="me-2" />
        </a>
    ]
})

export const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon icon="fa-envelope" className="mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        <FontAwesomeIcon icon="fa-phone" className="mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                    </div>
                    <div>
                        {socialIconsList}
                    </div>
                </div>
            </div>
        </nav>
    )
}