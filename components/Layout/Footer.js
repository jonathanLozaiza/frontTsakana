import React from "react";

const Footer =  () => {
    return (
        <footer id="footer" className="page-footer center-on-small-only unique-color-dark pt-0 f1" >

  <div className="info-color-dark text-center py-4">

    
    <a id="footer-link-react-newsletter" href="/docs/newsletter/" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">Join our newsletter      <i className="fas fa-envelope white-text ml-2"> </i>
    </a>

    <a id="footer-link-react-affiliate" href="/mdb-affiliate-program/" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">Become an Affiliate      <i className="fas fa-money-bill-alt white-text ml-2"> </i>
    </a>

    <a id="footer-link-react-contact" href="/general/contact/" className="border rounded p-2 px-3 mr-4 d-none d-md-inline-block">Contact us      <i className="fas fa-envelope white-text ml-2"> </i>
    </a>

    <a rel="nofollow" target="_blank" id="footer-link-react-github" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design">
      <i className="fab fa-github white-text mr-4"> </i>
    </a>

    <a rel="nofollow" target="_blank" href="https://www.youtube.com/watch?v=ozXDtSi5ByM">
          <i className="fab fa-youtube white-text mr-4"> </i>
        </a>

    <a rel="nofollow" target="_blank" id="footer-link-react-facebook" href="https://www.facebook.com/mdbootstrap">
      <i className="fab fa-facebook-f white-text mr-4"> </i>
    </a>

    <a rel="nofollow" target="_blank" id="footer-link-react-twitter" href="https://twitter.com/MDBootstrap">
      <i className="fab fa-twitter white-text mr-4"> </i>
    </a>

  </div>

  <div className="container mt-5 mb-4 text-center text-md-left">
    <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mb-r">
        <h6 className="spacing font-weight-bold">
          <strong>Contacto</strong>
        </h6>
        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto f2"/>
        <p>
          <a id="footer-link-react-faq" href="/docs/react/getting-started/faq/">Frequently Asked Questions</a>
        </p>
        <p>
          <a id="footer-link-react-browsers" href="/general/browsers-and-devices/">Browsers and devices</a>
        </p>
        <p>
          <a id="footer-link-react-license" href="/general/license/">License</a>
        </p>
        
        <p></p>
      </div>
      
       <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">
          <strong>Empresa</strong>
        </h6>
        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto f2"/>
        <p>
          <a id="footer-link-jquery" href="/docs/jquery/">MDB jQuery</a>
        </p>
        <p>
          <a id="footer-link-angular" href="/docs/angular/">MDB Angular</a>
        </p>
        <p>
          <a id="footer-link-react" href="/docs/react/">MDB React</a>
        </p>
        
        
      </div>
      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">
          <strong>Soy Admin</strong>
        </h6>
        <hr className="info-color mb-4 mt-0 d-inline-block mx-auto f2"/>
        <p>
          <a id="footer-link-tutBootstrap" href="/education/">Basics (HTML/CSS/JS)</a>
        </p>
        <p>
          <a id="footer-link-tutBootstrap" href="/education/bootstrap/">Bootstrap &amp; web design</a>
        </p>
        
      </div>
    </div>
  </div>
 
  <div className="footer-copyright py-1 text-center d-flex flex-row justify-content-center">
    <p className="col-md-4">Copyright © 2020 Tsakana. Todos los derechos reservados.</p>
    <a id="footer-link-react-copyright" className="col-md-4" href="#">
      <strong> Escríbenos </strong>
    </a>

    <div className="col-md-4">
        <a 
            href="http://www.tsakana.com" 
            title="TSAKANA" 
        >
            <img className="logo-main scale-with-grid" src="http://www.tsakana.com/wp-content/uploads/2020/07/tsakana_slogan-03.png" data-retina="http://www.tsakana.com/wp-content/uploads/2020/07/tsakana_slogan-03.png" data-height="192" alt="tsakana_slogan-03" width="200px" />
        </a>
    </div>
  </div>

</footer>
    )
}

export default Footer