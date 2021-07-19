function Rule(props) {
  var { rules } = props;

  return (
    <ul className="_phxs _pv">
      {rules.map((rule, key) => {
        return (
          <li key={key} className="_mvsm">
            <div>{rule.rule}</div>
            <div>
              {rule.description.map((desc, key) => {
                return <div className="_mvxxs" key={key}>{desc}</div>
              })}
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default Rule;
