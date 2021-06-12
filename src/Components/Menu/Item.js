import logoRedonda from "../../Assets/logoHumamRedondo.png";

function Item(props) {
  var { name, url } = props.menu;

  return (
    <div className="_4/12 _dib _tac">
      {name === "Home" ? (
        <a href={url}>
          <img className="_1/12" src={logoRedonda} alt="Home" />
        </a>
      ) : (
        <a href={url} className="_fz18 _white _tdn">
          {name}
        </a>
      )}
    </div>
  );
}

export default Item;
