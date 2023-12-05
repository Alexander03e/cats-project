
import DepartedCat from './DepartedCats/DepartedCat'

const Departed = ({departed}) => {

    return (
        <div className="container">
                <h1 className="mb-12">выбывшие</h1>
            <div className="departed-cats flex gap-4">
                {departed.map(departed_cat => {
                    return (

                        <DepartedCat cat={departed_cat}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Departed