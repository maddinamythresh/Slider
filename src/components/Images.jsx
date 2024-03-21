import React from 'react';

export default function Images({onSet}) {
  const arr = [
    "picture1.jfif",
    "picture2.jfif",
    "picture3.jfif",
    "picture4.jfif",
    "picture5.jfif",
    "picture6.jfif",
    "picture7.jfif",
    "picture8.jfif",
    "picture9.jfif"
  ];
  return (
    <div id="images">
      
      {arr.map((item, index) => (
        <div id="img-container" ><img id="img" key={index} src={require(`../assets/${item}`)} alt={`Image ${index + 1}`}  onClick={()=>onSet(index)}/></div>
      ))}
    </ div>
  );
}
