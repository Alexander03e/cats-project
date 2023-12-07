import Status from '../../../components/Animals/Status'


const DepartedCat = (props) => {


    return (
        <div className="animal departed-animal flex flex-col">
            <div className='img-cat-container'><img src={props.cat.photo} alt="" /></div>
            <div className='flex justify-between p-4 items-center'>
                <h1 className="mb-4 mt-2">{props.cat.name}</h1>
                <Status color={props.cat.health_status == 1 ? '#9cca86' : props.cat.health_status == 2 ? '#d3b15a' : '#d35a5a'}/>
            </div>
            <p className="pl-6 pr-6 pb-12">выбыл(а) {props.cat.receipt_date}</p>
            {props.children}<br /><br />    
        </div>
    )
}

export default DepartedCat;