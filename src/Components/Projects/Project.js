function Item(props) {
    var { name, description, image } = props.project;

    return (
        <div className="_bgsecondary _pvsm _df _mv">
            <div className="c-projects__imageFather _5/12 _3/12@tabletV _2/12@tabletH _1/12@desktop _dib _mtnlg" style={{'backgroundImage': `url(${image})`}}></div>

            <div className="_7/12 _9/12@tabletV _10/12@tabletH _11/12@desktop _dib _plxs _prsm">
                <span className="_fw7 _fz30 _mrxxs">
                    {name}:
                </span>
                <span>
                    {description}
                </span>
            </div>
        </div>
    );
}
export default Item;