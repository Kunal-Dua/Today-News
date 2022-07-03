export default function NewsItem(props) {
	return (
    <div className="card">
			<img src={props.imgUrl} className="card-img-top" alt="..." />
			<span class="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:"85%"}}>{props.source}</span>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				
				<p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} on {new Date (props.date).toGMTString()}</small></p>
				<a href={props.newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
					Read More
				</a>
			</div>
		</div>
	);
}
