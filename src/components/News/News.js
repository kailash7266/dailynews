import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "Rocio Fabbro",
      "title": "Bitcoin is a competitor for gold, not the U.S. dollar, Fed Chair Jerome Powell says",
      "description": "While cryptocurrency fans like to float Bitcoin as a possible replacement for the U.S. dollar, Federal Reserve Chair Jerome Powell doesn’t quite see it that way.Read more...",
      "url": "https://qz.com/bitcoin-gold-us-dollar-federal-reserve-chair-powell-1851713794",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/19dc6e7c98389be04b809c6ecd2ec6ca.jpg",
      "publishedAt": "2024-12-04T19:55:00Z",
      "content": "In This Story\r\nWhile cryptocurrency fans like to float Bitcoin as a possible replacement for the U.S. dollar, Federal Reserve Chair Jerome Powell doesnt quite see it that way.\r\nSpeaking at The New Yo… [+2704 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "William Gavin",
      "title": "Trump is taking the credit for Bitcoin's $100,000 milestone",
      "description": "The price of Bitcoin surged above the $100,000 mark on Wednesday for the first time, and one man thinks he’s the reason for it.Read more...",
      "url": "https://qz.com/trump-credit-bitcoin-100-000-record-crypto-sec-atkins-1851714261",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3338fed22e551bbad96ff55c8052f82d.jpg",
      "publishedAt": "2024-12-05T14:10:00Z",
      "content": "The price of Bitcoin surged above the $100,000 mark on Wednesday for the first time, and one man thinks hes the reason for it.\r\nCONGRATULATIONS BITCOINERS!!! $100,000!!! YOURE WELCOME!!! Together, we… [+1935 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Bailey Lipschultz",
      "title": "SPAC Kings Who Delivered 99% Losses Are Raising Billions Again",
      "description": "(Bloomberg) -- There are many well-established symbols of the froth building, yet again, in financial markets. There’s Bitcoin hovering around $100,000 or...",
      "url": "https://finance.yahoo.com/news/spac-kings-delivered-99-losses-113011371.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qb9fZKnFjBiAqpYuO1Wt4Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/746c5ed549ca275087a735c4f937cd08",
      "publishedAt": "2024-12-20T11:30:11Z",
      "content": "(Bloomberg) -- There are many well-established symbols of the froth building, yet again, in financial markets. Theres Bitcoin hovering around $100,000 or the Nasdaq hitting record high after record h… [+5320 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "Vinamrata Chaturvedi",
      "title": "Bitcoin smashes $98,000 mark—$100K now within easy reach",
      "description": "Bitcoin’s rally shows no signs of slowing, with the leading cryptocurrency surging past the $98,000 mark to hit a new all-time high. According to data from the crypto tracking platform CoinGecko, Bitcoin reached $98,310 on Thursday, setting a historic milesto…",
      "url": "https://qz.com/bitcoin-all-time-high-etf-options-launch-1851704783",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e96a8b3918300743a1715a0b754327ec.jpg",
      "publishedAt": "2024-11-21T14:40:00Z",
      "content": "Bitcoins rally shows no signs of slowing, with the leading cryptocurrency surging past the $98,000 mark to hit a new all-time high. According to data from the crypto tracking platform CoinGecko, Bitc… [+1837 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Man convicted for repeatedly lying about inventing Bitcoin",
      "description": "Computer scientist Craig Wright was given a suspended prison sentence for what was described as \"legal nonsense.\"",
      "url": "https://www.bbc.com/news/articles/c74x0j47gz8o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bced/live/79e73280-be0a-11ef-97a7-0ff098912783.jpg",
      "publishedAt": "2024-12-19T16:47:12Z",
      "content": "Craig Wright attending the London High Court in February 2024\r\nA computer scientist has been found to have committed contempt of court for falsely and persistently claiming to be the mysterious inven… [+2314 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Torrentfreak.com"
      },
      "author": "Ernesto Van der Sar",
      "title": "Bungie Targets Bitcoin Wallet in Effort to Expose ‘Destiny 2’ Cheaters",
      "description": "In a bid to identify individuals allegedly involved in creating and distributing cheats for the video game Destiny 2, Bungie has subpoenaed the U.S.-based cryptocurrency exchange Kraken. The subpoena seeks to identify the owner of a Bitcoin wallet, who is bel…",
      "url": "https://torrentfreak.com/bungie-targets-bitcoin-wallet-in-effort-to-expose-destiny-2-cheaters-241207/",
      "urlToImage": "https://torrentfreak.com/images/bitcoin-featured.jpg",
      "publishedAt": "2024-12-07T10:52:24Z",
      "content": "Over the past several years, Destiny 2 creator Bungie has pursued legal action against several cheat sellers and cheat makers.\r\nThis has resulted in a number judgments and settlements in Bungie’s fav… [+4175 chars]"
    }
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  handlePrevious = async () => {
    console.log("handlePrevious")
    let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page - 1}&pageSize=20`;

    let data = await fetch(urleverything);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1
    });
  }

  handleNext = async () => {
    console.log('handleNext')
    let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page + 1}&pageSize=20`;

    let data = await fetch(urleverything);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1
    });
  }

  async componentDidMount() {
    let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page}&pageSize=20&limit=10`;

    let data = await fetch(urleverything);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <>
        <div className='container mt-4'>
          <div className='page-title text-center'>
            {/* <h1>Daily News Updates for you!</h1> */}
            <div class="main">
              <marquee className="marq"
                direction="up" loop="1">
                <div className="geek1">Daily News Updates for you!</div>
                <div className="geek2">
                  A News portal for all types of news!
                </div>
              </marquee>
            </div>
          </div>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="custom-col col-sm-3 mt-2" key={element.url}>
                <NewsItems author={element.author ? element.author : ""} title={element.title ? element.title.slice(0, 50) : ""} desc={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage ? element.urlToImage : "../image/news-placeholder.png"} url={element.url} />
              </div>
            })}
          </div>
        </div>
        <div className='container mt-4 mb-5 d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevious} className="btn btn-outline-danger pl-5 pr-5">&laquo; Previous</button>
          <button disabled={this.state.page >= 5} type="button" onClick={this.handleNext} className="btn btn-outline-danger pl-5 pr-5 p-2">Next &raquo;</button>
        </div>
      </>
    )
  }
}

export default News
