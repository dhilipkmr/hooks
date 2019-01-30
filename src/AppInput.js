import React, {useState, useEffect} from "react";
const urls = [
  "AWS", 
  "PRISMA"
]

const App = () => {
    const [index, setIndex] = useState(0);
    return(
      <div className="App">
        <AppInput url={urls[index]} />
        <button onClick={() => setIndex((index) => index == 0 ? 1 : 0)}> Toggle Cloud Provider </button>
      </div>
    )
}