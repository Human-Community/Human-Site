import Item from "./Menu/Item";

function Menu(props) {
  var { lang, baseProps } = props;

  return (
    <div id="menu" className="_bgsecondary _df _jcsb _aic _pvxxs _pot _t0 _elevation24">
      {baseProps[lang].menus.map((menu, key) => {
        return <Item menu={menu} key={key} />;
      })}
    </div>
  );
}

export default Menu;
