import Rule from "../Components/Rules/Rule";

function Rules(props) {
  var { lang, baseProps } = props;

  return (
    <div className="o-wrapper _center" id="rules">
      <div className="_mhxxl@tabletH _bgsecondary _pvxl@tabletH _phsm@tabletH _pvxxs">
        <h1 className="_ttu _phxxs _ph0@tabletH">{baseProps[lang].rulesTitle}</h1>

        <Rule rules={baseProps[lang].rules}/>
      </div>
    </div>
  );
}

export default Rules;
