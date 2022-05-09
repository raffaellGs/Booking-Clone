import './FeaturedProperties.css'

export const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpContainer">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/87429279.jpg?k=c42e70f7026958ba62b91d68267c207fca4dce772d603a2e7159405a55e223d0&o=" alt="" className="fpImg" />
                <span className="fpName">7Seassons Apartments Budapest</span>
                <span className="fpCity">Budapest</span>
                <span className="fpPrice">A partir de R$ 782</span>
                <div className="fpRating">
                    <button className='fpBtnRating'>8,9</button>
                    <span className='fpRatingName'>Fabuloso</span>
                    <span className='fpRatingNumber'>6.562 avaliações</span>
                </div>
            </div>

            <div className="fpContainer">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/7991107.jpg?k=b4c80a2ce0a0649879fc9e78efaadbc8be9bb79ae661aff7f37262ef872586a0&o=" alt="" className="fpImg" />
                <span className="fpName">Appartement le Meéridien</span>
                <span className="fpCity">Paris</span>
                <span className="fpPrice">A partir de R$ 3.641</span>
                <div className="fpRating">
                    <button className='fpBtnRating'>8,9</button>
                    <span className='fpRatingName'>Fabuloso</span>
                    <span className='fpRatingNumber'>76 avaliações</span>
                </div>
            </div>


            <div className="fpContainer">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" className="fpImg" />
                <span className="fpName">The Apartments by The Sloane</span>
                <span className="fpCity">Londres</span>
                <span className="fpPrice">A partir de R$ 6.301</span>
                <div className="fpRating">
                    <button className='fpBtnRating'>9,3</button>
                    <span className='fpRatingName'>Fantástico </span>
                    <span className='fpRatingNumber'>122 avaliações</span>
                </div>
            </div>

            <div className="fpContainer">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=" alt="" className="fpImg" />
                <span className="fpName">Sun Spalato Views</span>
                <span className="fpCity">Split</span>
                <span className="fpPrice">A partir de R$ 2.381</span>
                <div className="fpRating">
                    <button className='fpBtnRating'>8,9</button>
                    <span className='fpRatingName'>Fantástico</span>
                    <span className='fpRatingNumber'>143 avaliações</span>
                </div>
            </div>
        </div>
    )
}
