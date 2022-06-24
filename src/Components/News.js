import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

export default function News(props) {
	const [ articles, setArticles ] = useState([]);

	const fetchData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=382298ce2f6445fe9130f0c1cc9939ff&category=${props.category}`;
		const data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		setArticles(parsedData.articles);
	};

	useEffect(() => {
		// declare the data fetching function
		// call the function
		fetchData();
	}, []);

	return (
		<div className="container">
			<h2 className="text-center my-4">Horizon Media</h2>
			<div className="row">
				{articles.map((element) => {
					return (
						<div className="col-md-4" key={element.url}>
							<NewsItem
								title={element.title}
								description={element.description}
								imgUrl={element.urlToImage}
								newsUrl={element.url}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

News.defaultProps = {
	country: 'in',
	category: 'general'
};

News.propTypes = {
	country: PropTypes.string,
	category: PropTypes.string
};
