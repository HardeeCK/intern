
function ItemTag(props){
    return <div className="row item-tag">
            <div className="col-lg-12">{props.img}</div>
            <div className="col-lg-12 sub-text">{props.name}</div>
    </div>
}

export default ItemTag;