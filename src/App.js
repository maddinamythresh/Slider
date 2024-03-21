import { useState } from "react";
import Header from "./components/Header";
import Images from "./components/Images";

const arr=["picture1.jfif","picture2.jfif","picture3.jfif","picture4.jfif","picture5.jfif",
                "picture6.jfif","picture7.jfif","picture8.jfif","picture9.jfif"];

function App() {

  const [img,setImg]=useState([null,null])

  function handle(value){
    setImg([arr[value],value])
  }
 
  return (
    <div >
       <Header onSet={handle} val={img} />
       <hr />
       <Images onSet={handle} />
    </div>
  );
}

export default App;
