import './propertyList.css'

function PropertyList() {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/653465.webp?k=fbe7d91b8cc452d7a5c75266fc10a40c28af4e9a88e65e46dca9b885084cb9a6&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Campos do Jordão</h1>
                <p>881 acomodações</p>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/653641.webp?k=29b8706ee4bff7b870ca35a698c5ac4be003b4122b00035a9d4a572d3101b1fe&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Rio de Janeiro</h1>
                <p>5.003 acomodações</p>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/349399.webp?k=6f023ae905561a547be6cc5cb117571b4a1425b633e767cdbbf797bb5225dd18&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Gramado</h1>
                <p>1.683 acomodações</p>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/653646.webp?k=0a8eb3999748f5b12b29f6bd5492a12b7f15a37535e572ea91403098d1588d38&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>São Paulo</h1>
                <p>2.689 acomodações</p>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/653621.webp?k=7d0330a52ee7350d5d38c6cbdf7349f4798889706117e38e74f04e631e09b31b&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Porto de Galinhas</h1>
                <p>1.406 acomodações</p>
            </div>
        </div>
    </div>
  )
}

export default PropertyList