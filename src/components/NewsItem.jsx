import React from "react";

const NewsItem =(props) => {
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '0'}}>
          <span className="badge rounded-pill bg-danger" >
            {props.source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author ? props.author : "Unknown"} on{" "}
                {new Date(props.publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

NewsItem.defaultProps = {
  author: "Unknown",
};

export default NewsItem;
