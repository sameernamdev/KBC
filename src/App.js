
import { createContext, useContext, useEffect, useState } from 'react';
import KBC from './component/layout';
import Kahani from './component/kahani';
 export var Content=createContext()
function App() {
  var[index,setIndex]=useState(0)
  var[result,setResult]=useState("")

  return (
    <>
    <Content.Provider value={{index,setIndex,result,setResult}}>
    <KBC/>
  </Content.Provider>
    </>
  );
}

export default App;
