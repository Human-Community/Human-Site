import Rule from "../Components/Rules/Rule";

function Rules(props) {
  var { lang, baseProps } = props;

  return (
    <div className="o-wrapper">
      <div className="_mhxxl _bgsecondary _pvxl _phsm">
        <h1 className="_ttu">{baseProps[lang].rulesTitle}</h1>

        <Rule rules={baseProps[lang].rules}/>
      </div>
    </div>
  );
}

export default Rules;
