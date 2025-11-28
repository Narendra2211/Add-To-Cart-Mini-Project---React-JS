import { useRef, useState } from 'react';
import '../css/addtocart.css'
function Addtocart(){
    let [cart,setCart] = useState([]);
    let inputRef = useRef();
    let readitem=()=>{
    let item;
    item = inputRef.current.value;
    setCart([...cart,item])
    console.log(cart)
    }
    let removeitem =(index)=>{
        let output=cart.filter((item,i)=> i!==index);
        setCart(output);
    }
   
    return(
        <div className="addtocart">
            <input type="text" ref={inputRef} />
            <button onClick={readitem}>Add</button>
            <ul>
                {
                    cart.map((fruit, index)=>{
                        return<><li key = {index}>{index+1}.{fruit}</li><button onClick={()=>removeitem(index)}>Remove</button><br /></>
                    })
                }
            </ul>
        </div>
    )
    
}
export default Addtocart;
