import { useState, useEffect } from 'react';

function App() {
const [articles, setArticles] = useState([]);
const [subReddit, setSubReddit] = useState('webdev');

useEffect(() => {
fetch(`https://www.reddit.com/r/webdev.json`).then(res => {
  if (res.status !== 200) {
    console.log(`erooror`);
    return;
  }
  res.json().then(data => {
    if (data != null){
      console.log(data)
    }
  }
  );

});}, [subReddit]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" className="input" value='webdev'/>
      </header>
      <div className="articles">

      </div>
    </div>
  );
}

export default App;
