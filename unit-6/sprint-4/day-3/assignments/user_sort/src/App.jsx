import "./App.css";
// import data from db.json
import data from "./db.json"
import {useState} from "react"
import UserDetails from "./components/UserDetails";
function App() {
 let [Data,setData] = useState(data);
 
 const Ascsorting = () => {
  const a = Data.sort(function (a, b) {
    if (a.first_name > b.first_name) {
      return 1;
    }
    if (a.first_name < b.first_name) {
      return -1;
    }
    return 0;
  });
  setData([...a]);
};

const Dscsort = () => {
  const b = Data.sort(function (a, b) {
    if (a.first_name < b.first_name) {
      return 1;
    }
    if (a.first_name > b.first_name) {
      return -1;
    }
    return 0;
  });
  setData([...b]);
};
  return (
    <div className="App" data-testid = 'app'>
      <button  data-testid = 'sort-asc-btn' onClick={Ascsorting}>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn'onClick={Dscsort}>Sort by Desc</button>
      
      {/*  map through the users data and pass props to the Userdetails component */}
      {Data.map((elem)=>{
        return < UserDetails avatar={elem.avatar} first_name={elem.first_name} last_name={elem.last_name} 
         address={elem.address} karma={elem.karma} followers={elem.followers} posts={elem.posts} is_following={elem.is_following}/>
      })}
    </div>
  );
}

export default App;
