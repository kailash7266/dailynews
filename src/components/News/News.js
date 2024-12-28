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
    },
    {
      "source": {
        "id": null,
        "name": "Blazer's Edge"
      },
      "author": "Timmay!",
      "title": "Scoot Comes Up Big as Blazers Beat Jazz 122-120 - Blazer's Edge",
      "description": "Scoot Henderson saves the game with his final second heroics in a Portland win.",
      "url": "https://www.blazersedge.com/2024/12/26/24329967/recap-blazers-jazz-scoot-henderson-buzzer-beater",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/zAUStWJMGxmt4085YyjAmN8XDZA=/0x0:4368x2287/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25806665/2190890069.jpg",
      "publishedAt": "2024-12-27T05:24:47Z",
      "content": "After four quarters of back-and-forth play with neither team able to gain a long advantage, it came down to one shot between the Portland Trail Blazers and Utah Jazz. And Scoot Henderson came up huge… [+1164 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Dawn Sawyer",
      "title": "Looking for a late Christmas gift? Friday’s Mega Millions jackpot proposes a $1.15 billion ticket - CNN",
      "description": "What better way to start the new year than with a 10-figure winning lottery ticket?",
      "url": "https://www.cnn.com/2024/12/27/business/friday-mega-millions-jackpot-reaches-1-15-billion/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24361770463793.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-12-27T05:01:00Z",
      "content": "What better way to start the new year than with a 10-figure winning lottery ticket?\r\nFridays Mega Millions jackpot is $1.15 billion, or $516.1 million in cash. The prize surged since its last drawing… [+2496 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Bird flu virus shows mutations in first severe human case in US, CDC says - Reuters",
      "description": "The U.S. Centers for Disease Control and Prevention said on Thursday its analysis of samples from the first severe case of bird flu in the country last week showed mutations not seen in samples from an infected backyard flock on the patient's property.",
      "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/bird-flu-virus-shows-mutations-first-severe-human-case-us-cdc-says-2024-12-26/",
      "urlToImage": "https://www.reuters.com/resizer/v2/4VBTZDBY4JM5VLIWMLCKLUFVSA.jpg?auth=55b2ab47bdd59d7d49d0f4b1b99da7352f34efd447896324aba47563d17d7aef&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-12-27T04:46:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Yeo Boon Ping",
      "title": "Political leaders and industry titans pay tribute to former Indian Prime Minister Manmohan Singh - CNBC",
      "description": "Former Indian PM Manmohan Singh’s passing triggered an outpouring of tributes from Indian political figures, world leaders and industry titans.",
      "url": "https://www.cnbc.com/2024/12/27/manmohan-singh-death-draws-tributes-from-political-industry-leaders-.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108080136-1735266902264-gettyimages-468102236-Del6403221.jpeg?v=1735267006&w=1920&h=1080",
      "publishedAt": "2024-12-27T04:13:00Z",
      "content": "Former Indian Prime Minister Manmohan Singh's passing on Tuesday at the age of 92 triggered an outpouring of condolence messages and tributes from political leaders from both sides of the aisle and i… [+2510 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Seattle Times"
      },
      "author": "Bob Condotta",
      "title": "Punchless Seahawks hold on vs. Bears, wait to see if playoff hopes are alive - The Seattle Times",
      "description": "The Seahawks got just two Jason Myers field goals in a 6-3 win against the Bears. Now they wait until Saturday night to see if their playoff hopes are still alive.",
      "url": "https://www.seattletimes.com/sports/seahawks/punchless-seahawks-hold-on-vs-bears-wait-to-see-if-playoff-hopes-are-alive/",
      "urlToImage": "https://images.seattletimes.com/wp-content/uploads/2024/12/12262024_TZR_GAMER-Seahawks_Bears-12262024_tzr_1951.jpg?d=1200x630",
      "publishedAt": "2024-12-27T04:11:44Z",
      "content": "CHICAGO After taking care of a little bit of necessary business Thursday night that they made unnecessarily hard with a 6-3 win over the Chicago Bears, the Seahawks sit and wait and hope.\r\nThe win wa… [+6139 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Variety"
      },
      "author": "Thania Garcia",
      "title": "Jay-Z’s Accuser Can Remain Anonymous, Judge Criticizes His Lawyer’s ‘Relentless’ Filings - Variety",
      "description": "Jay-Z and Sean 'Diddy' Combs' accuser can proceed anonymously in her lawsuit alleging the moguls sexually assaulted her when she was a teen.",
      "url": "https://variety.com/2024/music/news/jay-z-accuser-remain-anonymous-judge-criticizes-his-lawyers-1236260405/",
      "urlToImage": "https://variety.com/wp-content/uploads/2024/12/GettyImages-1345180967.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2024-12-27T03:34:00Z",
      "content": "The woman accusing Jay-Z and Sean “Diddy” Combs of sexually assaulting her when she was 13 can proceed anonymously (“at least for now”) in her lawsuit against the rappers, a judge ruled Thursday. \r\nN… [+2593 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": "Youkyung Lee",
      "title": "‘Squid Game’ Stocks Tank in Korea on Netflix New Season Letdown - Bloomberg",
      "description": "A less-than-perfect debut for the new season of Netflix Inc.’s blockbuster series Squid Game sent shares of related South Korean companies sharply lower Friday.",
      "url": "https://www.bloomberg.com/news/articles/2024-12-27/-squid-game-stocks-tank-in-korea-on-netflix-new-season-letdown",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIzW7Rc7W6y8/v1/1200x772.jpg",
      "publishedAt": "2024-12-27T02:58:00Z",
      "content": "A less-than-perfect debut for the new season of Netflix Inc.s blockbuster series Squid Game sent shares of related South Korean companies sharply lower Friday.\r\nArtist United Inc., a movie distributo… [+268 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "REZA SAIFULLAH Associated Press, EDNA TARIGAN Associated Press",
      "title": "Prayers and tears mark 20 years since the Indian Ocean tsunami that killed some 230,000 people - ABC News",
      "description": "People are gathering in prayer and visiting mass graves in Indonesia’s Aceh province to mark 20 years since the massive Indian Ocean tsunami, one of modern history’s worst natural disasters",
      "url": "https://abcnews.go.com/International/wireStory/prayers-tears-mark-20-years-indian-ocean-tsunami-117109586",
      "urlToImage": "https://i.abcnewsfe.com/a/a3fbee11-d630-4c6e-a858-831dfa0e1346/wirestory_489f23bd172fa4c01323567eb4ac842f_16x9.jpg?w=1600",
      "publishedAt": "2024-12-27T02:55:27Z",
      "content": "BANDA ACEH, Indonesia -- People gathered in prayer and visited mass graves in Indonesias Aceh province on Thursday to mark 20 years since the massive Indian Ocean tsunami hit the region in one of mod… [+4583 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Steven Zeitchik",
      "title": "Richard Parsons, a steady leader at Time Warner and Citi, dies at 76 - The Washington Post",
      "description": "He was one of the preeminent Black executives of his generation, steering media and financial institutions through moments of boardroom and market turbulence.",
      "url": "https://www.washingtonpost.com/obituaries/2024/12/26/richard-parsons-dead/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PQYYOR75YBB7NOVLO6Z54JPASI.JPG&w=1440",
      "publishedAt": "2024-12-27T02:41:46Z",
      "content": "Richard D. Parsons, one of the leading corporate executives and crisis managers of his generation, who as chairman of Time Warner and Citigroup became a steadying pilot for media and financial instit… [+10690 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": null,
      "title": "US FDA proposes standardized testing to detect asbestos in talc products - CNN",
      "description": "The U.S. Food and Drug Administration is proposing that cosmetic products containing talc should be tested using standardized methods to detect asbestos, a potential contaminant, according to documents posted on the federal register on Thursday.",
      "url": "https://www.cnn.com/2024/12/26/health/fda-asbestos-talc-products-reuters/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2023-12-06t024651z-1095788618-rc22r4ap29sf-rtrmadp-3-johnson-johnson-investor-day.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-12-27T02:20:00Z",
      "content": "The U.S. Food and Drug Administration is proposing that cosmetic products containing talc should be tested using standardized methods to detect asbestos, a potential contaminant, according to documen… [+1489 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sports Illustrated"
      },
      "author": "Karl Rasmussen",
      "title": "Al Michaels Teased Bears by Rehashing Caleb Williams's Draft Day Quote That Aged Poorly - Sports Illustrated",
      "description": "Even Al Michaels was giving Caleb Williams grief over his comments on NFL Draft day.",
      "url": "https://www.si.com/nfl/al-michaels-teased-bears-rehashing-caleb-williams-draft-day-quote",
      "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_4933,h_2774,x_0,y_71/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jg2xh7k3f8s2vw5wjr.jpg",
      "publishedAt": "2024-12-27T02:10:10Z",
      "content": "Caleb Williams had plenty of confidence coming into the NFL. After being drafted with the No. 1 pick by the Chicago Bears, Williams boldly reached out to the team's rookie punter, Tory Taylor, to inf… [+1316 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "ROB GILLIES",
      "title": "Canadian ministers head to Palm Beach for talks with incoming Trump administration - The Associated Press",
      "description": "Two top Canadian Cabinet ministers are visiting Palm Beach to talk border security and trade with officials in the incoming Donald Trump administration as Trump threatens tariffs on all Canadian products. New Finance Minister Dominic LeBlanc and Foreign Minis…",
      "url": "https://apnews.com/article/canada-trump-tariff-leblanc-joly-border-ca7f9bd358f05614d0f928f340162ef2",
      "urlToImage": "https://dims.apnews.com/dims4/default/1d8fa6e/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2F97%2Fa6e0efe799146265df0b0775258e%2Fb318b0ac06174adaa7ffc2099193df67",
      "publishedAt": "2024-12-27T01:57:00Z",
      "content": "TORONTO (AP) Two top Canadian Cabinet ministers are visiting Palm Beach to talk border security and trade with the incoming Donald Trump administration as Trump threatens tariffs on all Canadian prod… [+2871 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KTLA Los Angeles"
      },
      "author": "Associated Press",
      "title": "Shooting wounds 2 at Phoenix airport, 1 other stabbed, police say - KTLA Los Angeles",
      "description": "PHOENIX (AP) — A shooting at Sky Harbor Airport in Phoenix left two people injured by gunfire and another person stabbed in an incident related to a family dispute, police say. Phoenix police said the shooting happened at about 9:45 p.m. Wednesday at an airpo…",
      "url": "https://ktla.com/news/nationworld/ap-christmas-shooting-at-phoenix-airport-leaves-3-people-wounded/",
      "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2023/12/651b96dcadbdd6.59416165-e1702664663313.jpeg?w=1280",
      "publishedAt": "2024-12-27T00:20:25Z",
      "content": "PHOENIX (AP) A shooting at Sky Harbor Airport in Phoenix left two people injured by gunfire and another person stabbed in an incident related to a family dispute, police say.\r\nPhoenix police said the… [+2635 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Anjuman Ali",
      "title": "Health tips, cancer ‘thrivers’ and pet clothing: The week in Well+Being - The Washington Post",
      "description": "Plus, 5 ways to hack the 15-minute clinic visit.",
      "url": "https://www.washingtonpost.com/wellness/2024/12/26/health-hacks-cancer-thrivers-pet-clothing/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/S4ZJJV6N5BD2HPL5ELESAFSCJY.jpg&w=1440",
      "publishedAt": "2024-12-27T00:01:30Z",
      "content": "Happy Thursday! As the year draws to a close, were sharing some health hacks we learned from experts in 2024, stories of cancer thrivers who are giving other patients hope, and advice on how to make … [+3916 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Joshua Nelken-Zitser, Kit Gillet, Lloyd Lee",
      "title": "Russian Air Defenses Likely Caused Passenger Jet Crash That Killed Dozens - Business Insider",
      "description": "Russian air defenses, rather than a bird strike, likely caused the downing of an Azerbaijan Airlines flight, killing 38 people.",
      "url": "https://www.businessinsider.com/russia-air-defenses-azerbaijan-airlines-crash-killed-38-analysts-2024-12",
      "urlToImage": "https://i.insider.com/676d55bc7236dcf54aa2564a?width=1200&format=jpeg",
      "publishedAt": "2024-12-26T23:58:00Z",
      "content": "A preliminary investigation pointed to Russian air defenses as the cause of an Azerbaijan Airlines crash in Kazakhstan on Wednesday, Azerbaijani sources said.\r\nRussia's civil aviation authority quick… [+5121 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "CARLA K. JOHNSON AP medical writer",
      "title": "Cats can get sick with bird flu. Here's how to protect them - ABC News",
      "description": "The death of an Oregon house cat from bird flu and a pet food recall are raising questions about how people can protect their pets",
      "url": "https://abcnews.go.com/Lifestyle/wireStory/cats-sick-bird-flu-protect-117127670",
      "urlToImage": "https://i.abcnewsfe.com/a/8d371ab8-8d11-49f4-a019-de8ed46d7016/wirestory_7a57b3047164676a7d237bcd05a5b9db_16x9.jpg?w=1600",
      "publishedAt": "2024-12-26T23:49:34Z",
      "content": "The death of an Oregon house cat and a pet food recall are raising questions about the ongoing outbreak of bird flu and how people can protect their pets.\r\nBird flu has been spreading for years in wi… [+3192 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "The Wall Street Journal",
      "title": "Finland Seizes Tanker Linked to Russia After More Undersea Baltic Cables Cut - The Wall Street Journal",
      "description": null,
      "url": "https://www.wsj.com/world/europe/russia-linked-tanker-detained-after-more-undersea-baltic-cables-cut-da80d2ba",
      "urlToImage": null,
      "publishedAt": "2024-12-26T23:47:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "ScienceAlert"
      },
      "author": "AFP",
      "title": "Record Smashed: Parker Probe Kisses The Sun in Historic Christmas Flyby - ScienceAlert",
      "description": "NASA's pioneering Parker Solar Probe made history Tuesday, flying closer to the Sun than any other spacecraft, with its heat shield exposed to scorching temperatures topping 1,700 degrees Fahrenheit (930 degrees Celsius).",
      "url": "https://www.sciencealert.com/record-smashed-parker-probe-kisses-the-sun-in-historic-christmas-flyby",
      "urlToImage": "https://www.sciencealert.com/images/2024/12/parker_solar_probe_sun_prom_header.jpg",
      "publishedAt": "2024-12-26T23:43:24Z",
      "content": "NASA's pioneering Parker Solar Probe made history Tuesday, flying closer to the Sun than any other spacecraft, with its heat shield exposed to scorching temperatures topping 1,700 degrees Fahrenheit … [+3017 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PhoneArena"
      },
      "author": "Anam Hamid",
      "title": "Accessories maker leaks final Galaxy S25 series design - PhoneArena",
      "description": "New Galaxy S25 images are as close as it gets to an official confirmation of design.",
      "url": "https://www.phonearena.com/news/Accessories-maker-leaks-final-Galaxy-S25-series-design_id166159",
      "urlToImage": "https://m-cdn.phonearena.com/images/article/166159-wide-two_1200/Accessories-maker-leaks-final-Galaxy-S25-series-design.jpg",
      "publishedAt": "2024-12-26T22:03:47Z",
      "content": "Dbrand's listing shows us the rear design of all three phones, and while the images don't reveal anything we haven't already seen, they are the closest to an official confirmation of the final look.T… [+1344 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Two die in Sydney to Hobart yacht race - BBC.com",
      "description": "The two crew members died in separate incidents, both after being hit by a boat's boom.",
      "url": "https://www.bbc.com/news/articles/c0j15l83v7jo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8385/live/5ea25c00-c3cf-11ef-99ff-efb946e4e430.jpg",
      "publishedAt": "2024-12-26T21:48:34Z",
      "content": "Two people taking part in Australia's annual Sydney to Hobart yacht race have died in separate incidents, according to police.\r\nBoth crew members died in separate incidents after being hit by a boom … [+1517 chars]"
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
          <button disabled={this.state.page >= 1} type="button" onClick={this.handleNext} className="btn btn-outline-danger pl-5 pr-5 p-2">Next &raquo;</button>
        </div>
      </>
    )
  }
}

export default News
