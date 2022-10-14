import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container text-center text-md-left">    
          <div className="row">
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                  <div className="container">
                      <a className="footer__logo" href="">
                          <img src="../assets/composiciones del logo/COMPOSICION1_LOGO/PNG/LOGO_EN GRIS CLARO-01-recortado.png" alt="Logo Impulsar Dev Solutions" className="footer__logo__img"/>
                      </a>
                  </div>
              </div>
              <hr className="clearfix w-100 d-md-none"/>
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 container">
                  <h5 className="font-weight-bold text-uppercase mb-4">Secciones</h5>            
                  <ul className="list-unstyled">
                      <li><p>
                          <a href="#indexMain">Inicio</a>
                      </p></li>
                      <li><p>
                          <a href="#sectionNosotros">¿Quiénes somos?</a>
                      </p></li>
                      <li><p>
                          <a href="#sectionServicios">¿Qué ofrecemos?</a>
                      </p></li>
                      <li><p>
                          <a href="#sectionContacto">Contacto</a>
                      </p></li>
                  </ul>
              </div>
              <hr className="clearfix w-100 d-md-none"/>  
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">    
                  <h5 className="font-weight-bold text-uppercase mb-4">Contacto</h5>    
                  <ul className="list-unstyled">
                      <li><p>
                          <i className="bi bi-geo-alt"></i> Olegario V. Andrade 315, Mendoza, Argentina
                      </p></li>
                      <li><p>
                          <i className="bi bi-envelope"></i> contacto@impulsardev.comar
                      </p></li>
                      <li>
                      <p>
                          <i className="bi bi-telephone"></i> + 54 261 630-6131</p>
                      </li>
                  </ul>
              </div>
              <hr className="clearfix w-100 d-md-none"/>
              <div className="col-md-2 col-lg-2 text-center mx-auto my-4 footer__redes">
                  <h5 className="font-weight-bold text-uppercase mb-4">Redes</h5>            
                  <div className="socialMedia">
                      <a href="" type="button" className="socialMedia_anchord" target="_blank">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="https://instagram.com/impulsardev?igshid=YmMyMTA2M2Y=" type="button" className="socialMedia_anchord" target="_blank">
                        <i className="fa fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=5492616307131" type="button" className="socialMedia_anchord" target="_blank">
                        <i className="fa fa-brands fa-whatsapp"></i>  
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div className="container footer__copyright text-center">
          <a href=""> COPYRIGHT © 2022 | IMPULSAR DEV SOLUTIONS 
          </a>
      </div>
    </footer> 
  );
};

export default Footer;
