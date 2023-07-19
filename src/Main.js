import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";
function Main(){
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) =>{
      const newClothes = data.filter(element =>element.searchTerm === searchTerm);
      setClothes(newClothes);
    } 
  
    return(
      <div>
        <div className="cont">
        <h2 className="back">Free Standard Shiping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Clothes showClothes={clothes}/>
        
      </div>
    )
}
export default Main;