import telegram from "../../Assets/Social/telegram.png";
import whatsapp from "../../Assets/Social/whatsapp.png";

function Social(props) {
  var { social } = props;

  var images = { telegram, whatsapp };

  return (
    <div className="o-layout__item _2/12 _dib">
      <div className="c-social__bgblack">
        <a href={social.url} target="_blank" rel="noreferrer">
          <div className="_pxxs _pxs@tabletH">
            <img className="_1/1" src={images[social.name]} alt="social Logo" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Social;
