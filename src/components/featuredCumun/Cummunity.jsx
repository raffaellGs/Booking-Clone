import './cummunity.css'

export const Cummunity = () => {
    return (
        <div className='cummun'>
            <div className="cummunItem">
                <img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/brazil/ed879a15498a4a3af5db9e4463184170363f067b.jpg" alt="" className="communImg" />
                <span className="cummunName">Brasil</span>
                <span className="cummunInfo">Cumunidade de Viagem</span>
                <span className="cummunTraveler">142.940 viajantes</span>
            </div>

            <div className="cummunItem">
                <img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg" alt="" className="communImg" />
                <span className="cummunName">Papo de Viajante</span>
                <span className="cummunInfo">Fórum</span>
                <span className="cummunTraveler">556.940 viajantes</span>
            </div>

            <div className="cummunItem">
                <img src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png" alt="" className="communImg" />
                <span className="cummunName">Mais Comunidade</span>
                <span className="cummunInfo">Ver Tudo</span>
                <span className="cummunTraveler">9.894.940 viajantes</span>
            </div>

        </div>
    )
}
