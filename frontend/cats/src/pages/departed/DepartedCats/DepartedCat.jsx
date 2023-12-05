import Status from '../../../components/Animals/Status'


const DepartedCat = (props) => {


    return (
        <div className="animal departed-animal flex flex-col">
            <img src="/img/help-info/image 25.png" alt="" />
            <div className='flex justify-between p-4 items-center'>
                <h1 className="mb-4 mt-2">{props.cat.name}</h1>
                <Status color={props.cat.status_code == 1 ? 'red' : props.cat.status_code == 2 ? 'yellow' : 'lightgreen'}/>
            </div>
            <p className="pl-6 pr-6 pb-12">{props.cat.desc}</p>
            {props.children}<br /><br />    
        </div>
    )
}

export default DepartedCat;