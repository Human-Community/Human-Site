import logoRedonda from '../Assets/logoHumamRedondo.png';
import "./Construction.css"

function Construction(props) {
  var {lang, baseProps} = props;

  return (
    <div className="content degrade">
      <div className="_tac">
        <img src={logoRedonda} className="logoAnimation" alt="Human logo" />
        <h1 className="_ttu">
          <span className="_white">
            {baseProps[lang].title}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Construction;
