import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import top_headline from './top_headline.jpeg';

export default function News(props) {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	const location = useLocation();

	const fetchData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=382298ce2f6445fe9130f0c1cc9939ff&category=${props.category}&pageSize=${props.pageSize}`;
		const data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		setArticles(parsedData.articles);
		setLoading(false);
		console.log("in fetching data and country is "+props.country);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchData();
	}, [props.countryBool,location]);

	return (
		<div className="container">
			<h2 className={`text-center text-primary my-4`}>Horizon Media</h2>
			{loading && <Spinner />}
			<div className="row">
				{articles.map((element) => {
					return (
						<div className="col-md-4 my-3" key={element.url}>
							<NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : top_headline} newsUrl={element.url} author={element.author} date={element.publishedAt} /></div>
					);
				})}
			</div>
			<div className='container d-flex justify-content-between'>
				<button type="button" className="btn btn-primary">&larr; Previous</button>
				<button type="button" className="btn btn-primary">Next &rarr;</button>
			</div>
		</div>
	);
}

News.defaultProps = {
	country: 'in',
	category: 'general',
	pageSize: 6
};

News.propTypes = {
	country: PropTypes.string,
	category: PropTypes.string,
	pageSize: PropTypes.number
};
