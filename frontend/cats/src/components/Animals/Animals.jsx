import './Animals.css'
import Status from './Status';
import Button from '../Button/Button';
import Animal from './Animal/Animal';
import axios from 'axios';


const Animals = ({cats, onGiveHouse}) => {
    const giveHouse = async (cat) => {
        console.log(cat)
        if (localStorage.getItem('token')!==null) {
            await axios
                .patch(cat?.url, {
                    status: 0,
                    headers: {
                        Authorization: `Token ${window.localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    console.log(res.data)
                    onGiveHouse()
                    window.location.reload()
                })
                .catch(err => console.log(err))
        } else {
            onGiveHouse()
        }
    }

    return (
        <section className="animals flex gap-6 mb-20 mt-10 flex-wrap">
            {
                cats.map((cat, index) => {
                    
                    return (

                        <Animal cat={cat} key ={cat.id} index = {index}>
                            <Button onClick={() => giveHouse(cat)}>Подарить дом!</Button>
                        </Animal>
                
                    )
                })
            }

        </section>
    )
}

export default Animals;