import Arrow from "../Common/Arrow";

import Social from "./Social";

function Content(props) {
  var { lang, baseProps } = props;

  return (
    <div className="_1/1 _6/12@tabletH _pt _pt0@tabletH">
      <div className="c-home__content _fz36 _fw7 _fw3@tabletH _tac _tal@tabletH">
        <div className="_wsnw">{baseProps[lang].title.develop}</div>
        <div className="_wsnw">{baseProps[lang].title.forward}</div>
        <div className="_wsnw">{baseProps[lang].title.reinvent}</div>
      </div>

      <div className="_ptsm _pbxxs _pv@tabletH _fz20 _fz28@tabletH _taj">{baseProps[lang].description}</div>

      <div className="o-layout o-layout--xxs o-layout--xs@tabletH _tac _tal@tabletH">
        {baseProps.Common.social.map((social, key) => {
          return <Social key={key} social={social} />;
        })}

        <div className="o-layout__item _2/12 _tac _dn _dib@tabletH">
          <div>{baseProps[lang].join}</div>
          <Arrow orientation="left" />
        </div>
      </div>
    </div>
  );
}

export default Content;
