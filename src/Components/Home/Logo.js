import logoRedonda from "../../Assets/logoHumamRedondo.png";

function Logo(props) {
  var { lang, baseProps } = props;

  return (
    <div className="_1/1 _6/12@tabletH _tac _df _jcc _ptsm _pt0@tabletH">
      <div className="_1/1 _8/12@tabletH">
        <img className="_1/2 _1/1@tabletH" src={logoRedonda} alt="Human logo" />
        <div className="_fz22 _fz48@tabletH _fw7 _fw3@tabletH _ptxxs _ptsm@tabletH _ph@tabletH">{baseProps[lang].name}</div>
      </div>
    </div>
  );
}

export default Logo;
