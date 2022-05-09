import './mailList.css'

const MailList = () => {
    return (
        <div className='mailList'>
            <h1 className="mailTitle">Economize tempo, economize dinheiro!</h1>
            <p className='mailSubtitle'>Inscreva-se e enviaremos as melhores ofertas para você</p>
            <div className="mailInput">
                <input className='mailtext' type="text" name="" placeholder='Seu e-mail:' />
                <button className="mailBtn">Inscrever-se</button>
            </div>
            <div className="mailCheck">
                <input type="checkbox"/>
                <p>Quero receber um link para baixar DE GRAÇA o aplicativo da Booking.com!</p>
            </div>
        </div>
        
    )
}

export default MailList