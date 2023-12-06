


const NewList = ({item}) => {

    return (
        <div className="new-list flex items-center gap-6">
            <div className="img-list-container">
                <img src={item.photo} alt="" />
            </div>
            <h1>{item.name}</h1>
        </div>
    )
}

export default NewList