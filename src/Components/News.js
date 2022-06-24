import React, { useEffect, useState } from 'react';
import NewsItem from "./NewsItem";
export default function News() {
    const [articles, setArticles] = useState([])
    const fetchData = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=382298ce2f6445fe9130f0c1cc9939ff';
        const data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
    }

    useEffect(() => {
        // declare the data fetching function
        // call the function
        fetchData()
    }, [])

    return (
        <div className="container">

            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
        </div>
    )
}
