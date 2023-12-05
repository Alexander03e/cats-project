import './News.css'
import New from './New/New'
import NewList from './New/NewList'
const News = ({news}) => {
    
    return (
        <section className="news mb-10">
            <div className='news-container gap-20 flex justify-between'>

                <New item = {news[0]}/>

                <div className='news-aside flex flex-col flex-1'>
                {news.slice(1,5).map((item, index) => {
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