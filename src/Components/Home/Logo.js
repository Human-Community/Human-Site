import logoRedonda from "../../Assets/logoHumamRedondo.png";

function Logo(props) {
  var { lang, baseProps } = props;

  return (
    <div className="_1/1 _6/12@tabletH _tac _df _jcc">
      <div className="_1/1 _8/12@tabletH">
        <img className="_1/1" src={logoRedonda} alt="Human logo" />
        <div className="_ptsm _fz48 _ph">{baseProps[lang].name}</div>
      </div>
    </div>
  );
}

export default Logo;
