import { useState, useEffect } from "react";

import Article from "./component/Article";

function App() {
    const [articles, setArticles] = useState([]);
    const [subReddit, setSubReddit] = useState("webdev");

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + subReddit + ".json").then((res) => {
            if (res.status !== 200) {
                console.log(`erooror`);
                return;
            }
            res.json().then((data) => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        });
    }, [subReddit]);
    return (
        <div className="App">
            <header className="App-header">
                <input type="text" className="input" value={subReddit} onChange={e => setSubReddit(e.target.value)} />
            </header>
            <div className="articles">
                {articles !== null
                    ? articles.map((article, index) => (
                          <Article key={index} article={article.data} />
                      ))
                    : ""}
            </div>
        </div>
    );
}

export default App;
