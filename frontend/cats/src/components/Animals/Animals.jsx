import './Animals.css'
import Status from './Status';
import Animal from './Animal/Animal';


const Animals = ({cats,children}) => {
    
    console.log(cats)

    return (
        <section className="animals flex gap-6 mb-20 mt-10 flex-wrap">
            {
                cats.map((cat, index) => {
                    
                    return (

                        <Animal cat={cat} key ={cat.id} index = {index} children = {children}/>
                
                    )
                })
            }

        </section>
    )
}

export default Animals;