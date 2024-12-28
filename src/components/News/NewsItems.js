import React, { Component } from 'react'
export class NewsItems extends Component {
    render() {
        const { author, title, desc, imageUrl, url } = this.props;
        return (
            <div className="card">
                <img height={200} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <h6 className="card-title">{title}...</h6>
                    <p className="card-text">{desc}...</p>
                    <a href={url} className="btn btn-outline-danger">Read more..</a>
                </div>
            </div>
        )
    }
}
export default NewsItems
