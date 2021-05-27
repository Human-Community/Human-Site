import data from '../Data/data.js';

import logoRedonda from '../Assets/logoHumamRedondo.png';
import "./Construction.css"

function Construction(props) {
  var {lang, setLang} = props

  return (
    <div className="content degrade">
      <div className="_tac">
        <img src={logoRedonda} alt="Human logo" />
        <h1 className="_ttu">
          <span className="_white">
            {data[lang].construction}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Construction;
