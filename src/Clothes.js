function Clothes ({showClothes}){
    return(
        <div className="products">
            {showClothes.map((element =>{
                const{id, name, price, image} = element;
                return(
                    <div className="product-card" key={id}>
                        <img  src={image} alt="clothes" width="400px" height="500px" />
                    <div className="product-info">    
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default Clothes;