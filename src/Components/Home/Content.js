import Arrow from "../Commom/Arrow";

import Social from "./Social";

function Content(props) {
  var {lang, baseProps} = props;

  return (
    <div className="_1/1 _6/12@tabletH">
      <div className="c-home__content">
        <div>{baseProps[lang].title.develop}</div>
        <div>{baseProps[lang].title.forward}</div>
        <div>{baseProps[lang].title.reinvent}</div>
      </div>

      <div className="_pv _fz28 _taj">{baseProps[lang].description}</div>

      <div className="o-layout o-layout--xs">
        {(baseProps[lang].social).map((social, key) => {
          return <Social key={key} social={social} />
        })}

        <div className="o-layout__item _2/12 _dib _tac">
          <div>Entre!</div>
          <Arrow orientation="left" />
        </div>
      </div>
    </div>
  );
}

export default Content;
