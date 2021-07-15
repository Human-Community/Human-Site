import Logo from "../Components/Home/Logo";
import Content from "../Components/Home/Content";

import "./pages.css";
import Arrow from "../Components/Commom/Arrow";

function Home(props) {
  var { lang, setLang, baseProps } = props;

  return (
    <div id="home" className="_bgterciary _por _ovh">
      <div className="c-home__strip _poa _z0 _bgsecondary _elevation24"></div>
      <div className="c-home__allContent o-wrapper _df@tabletH _fxww _aic _center _por _z1">
        <Logo lang={lang} baseProps={baseProps} />
        <Content lang={lang} baseProps={baseProps} />

        <div className="_1/1 _por _df _aic _jcc">
          <a href="#menu"><Arrow orientation="down" /></a>
          <div
            className="_poa _b0@tabletH _rnxs _r0@tabletH _bgprimary _ph _pxxs _bdrs20 _cp"
            onClick={() => setLang(baseProps[lang].changeCode)}
          >
            <span className="_dn@tabletH">{baseProps[lang].changeCode}</span>
            <span className="_dn _db@tabletH">{baseProps[lang].changeLanguage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
