import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "South Korea votes to impeach acting president Han Duck-soo",
      "description": "Han took over the role after President Yoon was impeached by parliament two weeks ago.",
      "url": "https://www.bbc.co.uk/news/articles/cj30234e0djo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0f2c/live/60f697b0-1203-11ef-82e8-cd354766a224.png",
      "publishedAt": "2024-12-27T08:07:15.4052406Z",
      "content": "It was a scene of chaos in parliament as the vote was held on Friday.\r\nLawmakers from Yoon and Han's ruling People Power Party (PPP) protested after National Assembly speaker Woo Won-shik announced t… [+1183 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "National Trust properties at risk from extreme weather",
      "description": "A blurring of the distinctions between seasons is also a challenge for insects and their predators.",
      "url": "https://www.bbc.co.uk/news/articles/c20e338wlxno",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/fe76/live/e01aea00-c11c-11ef-a2ca-e99d0c9a24e3.jpg",
      "publishedAt": "2024-12-27T07:52:22.1721052Z",
      "content": "Storms and flooding have damaged some of the UK's most precious heritage, according to the National Trust - the UK's biggest conservation charity.\r\nIt says extreme weather is taking a toll on the est… [+491 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Royal Mail: UK's longest serving postman calls time on career",
      "description": "Robert Hudson, known as Rocky, started working for the Royal Mail in December 1964.",
      "url": "https://www.bbc.co.uk/news/articles/ce32ezwqvl4o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ceb8/live/a08e15b0-c216-11ef-a5b6-dfd204411bef.png",
      "publishedAt": "2024-12-27T05:52:20.1410224Z",
      "content": "After spending 10 years going door-to-door, Rocky transferred to night shifts at the London Docklands Delivery Office.\r\nThis came after the sudden death of his wife, Sheila, at age 26, in 1980 and he… [+678 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine captures North Korean soldier in Russia, says Seoul",
      "description": "The soldier is thought to be the first North Korean prisoner of war captured in the Russia-Ukraine conflict.",
      "url": "https://www.bbc.co.uk/news/articles/cq62qe131d7o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/3e55/live/7ae47d90-c405-11ef-a2ca-e99d0c9a24e3.jpg",
      "publishedAt": "2024-12-27T04:22:20.982833Z",
      "content": "Ukrainian forces have captured an injured North Korean soldier who was sent to support Russia's war, South Korea's spy agency confirmed Friday.\r\nThe soldier is believed to be the first North Korean p… [+378 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Home swaps: 'How dating for homes saved me £20,000 on holidays'",
      "description": "Home exchanges give travellers the chance to experience someone else's way of life abroad.",
      "url": "https://www.bbc.co.uk/news/articles/cy87291zgj3o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/8043/live/1c49c410-b650-11ef-b290-5582545eece3.jpg",
      "publishedAt": "2024-12-27T01:07:22.0309829Z",
      "content": "Unlike simply booking a hotel room with a few clicks, home exchanges can be quite labour intensive, according to photographer Kate Abby.\r\n\"It does involve a lot of work leading up to it, such as extr… [+619 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Machine guns and pistols among firearms lost by MoD",
      "description": "More than 700 phones, laptops and USB sticks were also lost or stolen over the past two years.",
      "url": "https://www.bbc.co.uk/news/articles/c9q717q9l5jo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/e52c/live/7c003550-bef8-11ef-b59e-49d4e30dab91.jpg",
      "publishedAt": "2024-12-27T00:52:23.9845791Z",
      "content": "The number of phones which have gone missing from the department has risen from 101 in 2023 to 159 in 2024, while for USB sticks the figure was 20 in 2023 and 125 in 2024. \r\nHowever, the number of la… [+1191 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Newspaper headlines: 'Tory war with Farage' and Just Stop Oil 'hypocrites'",
      "description": "Friday's papers include stories on a clash of words between Nigel Farage and Kemi Badenoch.",
      "url": "https://www.bbc.co.uk/news/articles/c2ex4lm0m89o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b788/live/93c43480-c3de-11ef-a0f2-fd81ae5962f4.png",
      "publishedAt": "2024-12-26T23:37:19.4514755Z",
      "content": "Image caption, A range of stories make Friday's front pages including the Times which splashes on comments from a former Conservative justice secretary, David Gauke, about sending convicts to open pr… [+351 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Two die in Sydney to Hobart yacht race",
      "description": "The two crew members died in separate incidents, both after being hit by a boat's boom.",
      "url": "https://www.bbc.co.uk/news/articles/c0j15l83v7jo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/8385/live/5ea25c00-c3cf-11ef-99ff-efb946e4e430.jpg",
      "publishedAt": "2024-12-26T22:22:18.9840155Z",
      "content": "New South Wales (NSW) police said the first incident was reported to officers just before midnight on Thursday local time (12:50 GMT) by the Australian Maritime Safety Authority in the country's capi… [+808 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Head of WHO Tedros at Yemen airport during Israeli air strikes",
      "description": "Israel claimed responsibility for the strikes, saying it had targeted Houthi \"military infrastructure\".",
      "url": "https://www.bbc.co.uk/news/articles/clyj88rye1jo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/c658/live/9c17dda0-c3c8-11ef-a2ca-e99d0c9a24e3.jpg",
      "publishedAt": "2024-12-26T21:22:17.7033767Z",
      "content": "It is unclear whether the fatalities were civilians or Houthi rebels.\r\nIn a statement, the Israel Defense Forces (IDF) said its \"fighter jets conducted intelligence-based strikes on military targets … [+1206 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Reform UK has more members than Tories, Nigel Farage says",
      "description": "Reform UK leader Farage says his party has made history and is now the \"real opposition\".",
      "url": "https://www.bbc.co.uk/news/articles/cq62qv3486qo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0e3e/live/4fce22e0-c389-11ef-a4ac-91c171cf68e4.jpg",
      "publishedAt": "2024-12-26T14:52:19.7021829Z",
      "content": "Reacting to the growing tally on X, Farage said, external: \"The youngest political party in British politics has just overtaken the oldest political party in the world.\"\r\nParty chairman Zia Yusuf sai… [+1553 chars]"
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
    // console.log("handlePrevious")
    // let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page - 1}&pageSize=20`;

    // let data = await fetch(urleverything);
    // let parseData = await data.json();
    // console.log(parseData);
    this.setState({
     // articles: parseData.articles,
     articles: this.articles,
      page: this.state.page - 1
    });
  }

  handleNext = async () => {
    // console.log('handleNext')
    // let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page + 1}&pageSize=20`;

    // let data = await fetch(urleverything);
    // let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      // articles: parseData.articles,
      articles: this.articles,
      page: this.state.page + 1
    });
  }

  async componentDidMount() {
    // let urleverything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fa0008577809498eab651be5ae11f1a9&page=${this.state.page}&pageSize=20&limit=10`;

    // let data = await fetch(urleverything);
    // let parseData = this.articles;//await data.json();
    // console.log(parseData);
    // this.setState({ articles: parseData.articles });
    this.setState({ articles: this.articles});
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
