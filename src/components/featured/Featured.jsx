import './featured.css'

function Featured() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/818751.webp?k=3d70e03f9de719313dab006c4ee81d29c0f89b2da88adc81832ed93ba1224b3e&o=" className="featuredImg" />
                <div className="featureTitle">
                    <h1>Cuiabá</h1>
                    <h2>123 acomodações</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/653406.webp?k=4fa9cb2294e9ac9ef1287f88a8e1a89310fccec9349397b02f1f356dabd4e2f5&o=" className="featuredImg" />
                <div className="featureTitle">
                    <h1>Aracaju</h1>
                    <h2>323 acomodações</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/540x270/653439.webp?k=1881346427ae620f701ba73e7cd3474dcd6d86ac600bd6cf1e78f32c1e608a23&o=" className="featuredImg" />
                <div className="featureTitle">
                    <h1>Brasilia</h1>
                    <h2>532 acomodações</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured