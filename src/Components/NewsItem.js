export default function NewsItem(props) {
	return (
    <div className="card">
			<img src={props.imgUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
					Read More
				</a>
			</div>
		</div>
	);
}
