import press from "./PressModules";
function Press(){
    return <div className="press">
        <p>IN THE PRESS</p>
        <div className="press-item-div">
            {press.map(press_item =>{
                return <div>{press_item.type}</div>
            })}
        </div>
    </div>
}
export default Press;