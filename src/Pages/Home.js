import Logo from "../Components/Home/Logo";
import Content from "../Components/Home/Content";

import './pages.css'
import Arrow from "../Components/Commom/Arrow";

function Home(props) {
  var { lang, setLang, baseProps } = props

  return (
    <div className="_bgterciary _por _ovh">
      <div className="c-home__strip _poa _z0 _bgsecondary _elevation24"></div>
      <div className="o-wrapper _h100 _df _fxww _aic _center _por _z1">
        <Logo lang={lang} baseProps={baseProps} />
        <Content lang={lang} baseProps={baseProps} />

        <div className="_1/1 _por _df _aic _jcc">
          <Arrow orientation="down" />
          <div class="_poa _r0 _bgprimary _ph _pxxs _bdrs20 _cp" onClick={() => setLang(baseProps[lang].changeCode)}>{baseProps[lang].changeLanguage}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
