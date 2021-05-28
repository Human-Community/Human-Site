import baseProperties from '../Data/baseProperties.js';

import logoRedonda from '../Assets/logoHumamRedondo.png';
import "./Construction.css"

function Construction(props) {
  var {lang} = props

  return (
    <div className="content degrade">
      <div className="_tac">
        <img src={logoRedonda} className="logoAnimation" alt="Human logo" />
        <h1 className="_ttu">
          <span className="_white">
            {baseProperties[lang].construction}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Construction;
