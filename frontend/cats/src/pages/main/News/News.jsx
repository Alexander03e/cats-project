import './News.css'
import New from './New/New'
import NewList from './New/NewList'
const News = ({news}) => {
    
    return (
        <section className="news mb-20">
            <div className='news-container flex justify-between'>

                <New item = {news[0]}/>

                <div className='news-aside flex flex-col'>
                {news.slice(1).map((item, index) => {
                    return (                        
                        <NewList item = {item}/>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default News;