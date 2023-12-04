import './contacts.css'

const Contacts = () => {

    return (
        <section className="contacts">
            <div className="container">
                <h1 className='mb-5'>контакты</h1>
                <p>Адрес: г. Краснодар, ул. Садовая, 159.</p>
                <p>Часы работы приюта: пн.-пт. с 9:00 до 20:00, выходные дни с 9:00 до 17:00</p>
                <p>Номер телефона приюта: 8(000)-000-00-00</p>
                <p>E-mail: kotodom_official@icloud.com</p>
                <p>Номер телефона ветеринарного кабинета: 8-000-000-00-00</p>
                <p>E-mail: kotodom.vet@icloud.com</p>
                <p>Предложения о сотрудничестве направлять: kotodom-media@icloud.com</p>
                <p>Для жалоб и личной связи с директором: kotodom-direktoru@icloud.com</p>
                <img className="mt-20 mb-32" src="/img/contacts/image 29.png" alt="" />
            </div>
        </section>
    )
}

export default Contacts;