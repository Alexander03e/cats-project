

const New = ({item}) => {
    
    return (
        <div className="new flex-1">
            <div className="new-img-container">
                <img className=''src={item.img} alt="" />
            </div>
            <div className="item-content p-6 ">
                <h1>{item.name}</h1>
                <p className="pt-5">{item.age}, {item.breed}, {item.color}</p>
            </div>
        </div>
    )
}

export default New;