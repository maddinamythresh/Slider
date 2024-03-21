import { useState } from "react"


const arr=["picture1.jfif","picture2.jfif","picture3.jfif","picture4.jfif","picture5.jfif","picture6.jfif","picture7.jfif","picture8.jfif","picture9.jfif"];
export default function Header({onSet,val}){
   let css,css2;
   
    if(val[1]===null){
        css="arrow";
        css2="arrow";
    }
    else if(val[1]===0){
        css="arrow"
    }
    else if(val[1]===8){
        css2="arrow"
    }
    else{
        css=undefined;
        css2=undefined;
    }
    return(
        
        <header >

          <button className={css} onClick={()=>onSet(val[1]-1)}>&lt;</button> 
          {val[1]!=null ?<img src={require(`../assets/${val[0]}`)} id="display-image"/>:<img src="" id="display-image"/>}
          
          <button className={css2} onClick={()=>onSet(val[1]+1)}>&gt;</button>
        </header>
    )
}