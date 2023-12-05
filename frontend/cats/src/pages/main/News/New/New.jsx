

const New = ({item}) => {
    
    return (
        <div className="new">
            <div new-img-container>
                <img src={item.img} alt="" />
            </div>
            <div className="item-content p-10 ">
                <h1>{item.title}</h1>
                <p className="pt-8">{item.desc}</p>
            </div>
        </div>
    )
}

export default New;