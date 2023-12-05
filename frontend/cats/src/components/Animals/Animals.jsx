import './Animals.css'
import Status from './Status';
import Animal from './Animal/Animal';


const Animals = ({cats,children}) => {
    
    

    return (
        <section className="animals flex gap-6 mb-20 mt-10">
            {
                cats.map((cat, index) => {
                    
                    return (

                    <Animal cat={cat} key ={index} index = {index} children = {children}/>
                
                    )
                })
            }

        </section>
    )
}

export default Animals;