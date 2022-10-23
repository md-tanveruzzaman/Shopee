import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomeCarousel = () => {
    const images = ['banner_img_01.jpg', 'banner_img_02.jpg', 'banner_img_03.jpg'];
    const carouselInner = images.map((img, index) => [
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index.toString()}>
            <div className="container">
                <div className="row p-5">
                    <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img className="img-fluid" src={`/banner/${img}`} alt="" />
                    </div>
                    <div className="col-lg-6 mb-0 d-flex align-items-center">
                        <div className="text-align-left align-self-center">
                            <h1 className="h1 text-success"><b>Shopee</b> eCommerce</h1>
                            <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                            <p>
                                Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). 
                                This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website. 
                                Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ]);
    const indicators = images.map((img, index) => <li key={index.toString()} data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></li>);

    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                {indicators}
            </ol>
            <div className="carousel-inner">
                {carouselInner}
            </div>
            <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                <FontAwesomeIcon icon="fa-chevron-left"  />
            </a>
            <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                <FontAwesomeIcon icon="fa-chevron-right" />
            </a>
        </div>
    )
}