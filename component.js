import React,{useState} from 'react'
function Component() {
    const data=[
        {
          dish:"Breakfast Burrito",
          img:"https://cdn.tasteatlas.com/images/dishes/2f2175d0b10c4befbcca74cf8b5491ff.jpg?w=905&h=510",
          Rs:400,
          key:1
        },
        {
          dish:"California-Style Pizza",
          img:"https://cdn.tasteatlas.com/images/dishes/d75fa85a425544729c85dc735f7fb083.jpg?w=905&h=510",
          Rs:500,
          key:2
        },
        {
          dish:"Uramaki",
          img:"https://cdn.tasteatlas.com/images/dishes/0e1987353e3e4f218d3169c71e6d7591.jpg?w=905&h=510",
          Rs:600,
          key:3
        },
        {
          dish:"Plate Lunch",
          img:"https://cdn.tasteatlas.com/Images/Dishes/71915592cb854d809744213c8b6dfac8.jpg?w=905&h=510",
          Rs:700,
          key:4
        }
      ];
      const [cart, setcart] = useState([]);
      const handler=(item)=>{
        setcart([...cart,item]);
      }
    return (
        <div className="component">
           {data.map((item)=>{
       return(
         <div key={item.key} className="key">
          <h1>{item.dish}</h1>
          <img src={item.img}></img>
          <h1>&#8377;{item.Rs}</h1>
          <button className="btn btn-danger" onClick={handler}>Add to cart</button>
           </div>
       )
     })}
     {console.log(cart)}
    
        </div>
    )
}

export default Component
