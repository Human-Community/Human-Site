import { ReactComponent as WestArrow } from "../../Assets/Icons/west_black_24dp.svg"

import '../components.css'

function Arrow(props) {
  var { orientation } = props;
  
  return (
    <WestArrow className={`c-common__arrow${orientation} _bgwhite _bdrs50p _mtxxs _fprimary`} />
  );
}

export default Arrow;
