import Logo from "../Components/Home/Logo";
import Content from "../Components/Home/Content";

import './pages.css'

function Home(props) {
  var { lang, setLang, baseProps } = props

  return (
    <div className="_bgterciary _por _ovh">
      <div className="c-home__strip _poa _z0 _bgsecondary _elevation24"></div>
      <div className="o-wrapper _h100 _df _fxww _aic _center _por _z1">
        <Logo lang={lang} baseProps={baseProps} />
        <Content lang={lang} baseProps={baseProps} />

        <div className="_dn _1/1">
          <div>Seta pra baixo</div>
          <div>Mudar língua para ${baseProps[lang].changeLanguage}</div>
        </div>
        <div className="_dn _1/1">
          Menu
        </div>
      </div>
    </div>
  );
}

export default Home;
