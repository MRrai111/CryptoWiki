// import React, { useState } from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';
import {Avatar} from 'antd';
import iconm from '../images/Elon.jpeg';
import iconm2 from '../images/dogecoin.webp';
// import { useGetCryptosQuery } from '../services/cryptoApi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Loader from './Loader';

// const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

// const { Text, Title } = Typography;
// const { Option } = Select;

// const News = ({ simplified }) => {
//   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
//   const { data } = useGetCryptosQuery(100);
//   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

//   if (!cryptoNews?.value) return <Loader />;

//   return (
//     <Row gutter={[24, 24]}>
//       {!simplified && (
//         <Col span={24}>
//           <Select
//             showSearch
//             className="select-news"
//             placeholder="Select a Crypto"
//             optionFilterProp="children"
//             onChange={(value) => setNewsCategory(value)}
//             filterOption={(input, option) => option.Children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
//           >
//             <Option value="Cryptocurency">Cryptocurrency</Option>
//             {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
//           </Select>
//         </Col>
//       )}
//       {cryptoNews.value.map((news, i) => (
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card hoverable className="news-card">
//             <a href={news.url} target="_blank" rel="noreferrer">
//               <div className="news-image-container">
//                 <Title className="news-title" level={4}>{news.name}</Title>
//                 <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
//               </div>
//               <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
//               <div className="provider-container">
//                 <div>
//                   <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
//                   <Text className="provider-name">{news.provider[0]?.name}</Text>
//                 </div>
//                 <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default News;



// import React from 'react'
// const News= () =>
// {
//     return(
//         <div className="News">
//             <iframe src="https://gadgets.ndtv.com/cryptocurrency/news/petition-seeking-shiba-inu-listing-on-robinhood-reaches-big-milestone-2568115" title="Dogecoin"></iframe>
//         </div>
//     )
// }
// export default News





import React from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';

// import { useGetCryptosQuery } from '../services/cryptoApi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import Loader from './Loader';

// const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

// const { Text, Title } = Typography;
// const { Option } = Select;

const News = ({ simplified }) => {
//   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
//   const { data } = useGetCryptosQuery(100);
//   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

//   if (!cryptoNews?.value) return <Loader />;

  return (
    // <Row gutter={[24, 24]}>
    //   {!simplified && (
    //     <Col span={24}>
    //       <Select
    //         showSearch
    //         className="select-news"
    //         placeholder="Select a Crypto"
    //         optionFilterProp="children"
    //         onChange={(value) => setNewsCategory(value)}
    //         filterOption={(input, option) => option.Children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    //       >
    //         <Option value="Cryptocurency">Cryptocurrency</Option>
    //         {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
    //       </Select>
    //     </Col>
    //   )}
    //   {cryptoNews.value.map((news, i) => (
    //     <Col xs={24} sm={12} lg={8} key={i}>
    //       <Card hoverable className="news-card">
    //         <a href={news.url} target="_blank" rel="noreferrer">
    //           <div className="news-image-container">
    //             <Title className="news-title" level={4}>{news.name}</Title>
    //             <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
    //           </div>
    //           <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
    //           <div className="provider-container">
    //             <div>
    //               <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
    //               <Text className="provider-name">{news.provider[0]?.name}</Text>
    //             </div>
    //             <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
    //           </div>
    //         </a>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    <div> 
        <div>
            <h5>TradingNations</h5>
            <h1>Bitcoin bounces back above $55,000, but trader has his eye on two other cryptocurrencies</h1>
            <p>Bitcoin just made a major comeback.The cryptocurrency rallied on Wednesday, topping $55,000 and hitting its highest level since mid-May. Regulatory fears have eased this week after both Treasury Secretary Janet Yellen and SEC chair Gary Gensler said they have no plans to impose restrictions on cryptocurrency trading.Bill Baruch, president of Blue Line Capital, had a plan over the summer to beef up his position in bitcoin as its price plummeted – re-entering at $32,000 and adding to it if it fell to as low as $20,000.</p>
            <a href="https://www.cnbc.com/2021/10/06/bitcoin-price-above-55k-trader-on-which-cryptocurrency-could-rally.html" target='_blank'>Read More</a>       
        </div>
      <hr/>
        <div>
            <h5>India Today</h5>
            <h1>India Today Conclave: Crypto experts discuss how to invest in virtual coins safely</h1>
            <p>xperts are optimistic about the future of cryptocurrencies in India as millions of millennial investors are now investing aggressively in the space. While they remain optimistic, they also feel that investors should first acquire knowledge about the new asset class that has boomed during the pandemic.At the India Today Conclave, a panel of cryptocurrency experts discussed details about the technology behind virtual coins, how they compare against traditional assets and what new investors should do before diving into the world of cryptocurrencies.</p>
            <a href="https://www.indiatoday.in/business/story/india-today-conclave-crypto-experts-investing-virtual-coins-safely-1862970-2021-10-09" target='_blank'>Read More</a>
        </div>
      <hr/>
        <div>
            <h5>NewScientist</h5>
            <h1>Why have Elon Musk and Tesla suddenly turned against bitcoin?</h1>
            <p>Elon Musk has performed a sudden U-turn on bitcoin over concerns about its energy usage, and says his electric car firm Tesla will no longer accept the cryptocurrency as payment – but will his decision have an impact, and could Tesla turn to an alternative currency?</p>
            {/* <img src="./images/Elon.jpeg" alt="Elon musk photo not found" /> */}
            <Avatar size={{xs: 24,sm: 32,md: 40,lg: 64,xl: 80,xxl: 100,}} src={iconm} id="iconphoto"size="extralarge" />
            <a href="https://www.linkedin.com/pulse/why-have-elon-musk-tesla-unexpectedly-turned-against-bitcoin/" target='_blank'>Read More</a>
            
            {/* <a id='G_qxq7RSSD1biD0-Bs3oKA' class='gie-slideshow' href='http://www.gettyimages.in/detail/1229892421' target='_blank' style='color:#a7a7a7;text-decoration:none;font-weight:normal !important;border:none;display:inline-block;'>Embed from Getty Images</a><script>window.gie=window.gie||function(c){(gie.q=gie.q||[]).push(c)};gie(function(){gie.widgets.load({id:'G_qxq7RSSD1biD0-Bs3oKA',sig:'o45y2Coee_MQUYM23kIGhSfjBLqwZEm2kCeOXI4E-Xs=',w:'594px',h:'413px',items:'1229892421,1229892852,1229892934,1229893337,1229893671',caption: true ,tld:'in',is360: false })});</script><script src='//embed-cdn.gettyimages.com/widgets.js' charset='utf-8' async></script> */}
        </div>
        <hr/>
        <div>
            <h5>Naieramatrics</h5>
            <h1>Bitcoin, Ethereum, others crash as China announces fierce crackdown on cryptos</h1>
            <p>Bitcoin, Ethereum, and other cryptocurrencies crashed on Friday after China announced a fierce clamp down on the market in its bid to fend off financial risks.The world’s biggest cryptocurrency, Bitcoin, plunged by over 11% to $37,429, while Ethereum, the world’s second-largest cryptocurrency, crashed by over 13% to $2,552.Dogecoin fell by as much as 15% to $0.34 during the trading session on Friday.</p>
            <a href="https://nairametrics.com/2021/05/21/bitcoin-ethereum-others-crash-as-china-announces-fierce-crackdown-on-cryptos/" target='_blank'>Read More</a>
        </div>
        <hr/>
    <div>
        <h5>Gadgets 360</h5>
        <h1>Dogecoin Millionaire Glauber Contessoto Says He Continues to Hold All His Crypto Assets</h1>
        <p>Glauber Contessoto, who had refused to sell his holdings despite losing the millionaire status briefly during the market crash in May this year, says that he continues to hold every single coin he has bought and does not intend to sell them anytime soon. But why is he holding and what are his plans? Known to the world as the “Doge millionaire”, Contessoto said he sees the Dogecoin price doubling in the next two months to “around 50 cents”. He had claimed in April that he became a Dogecoin millionaire in “just 69 days”.</p>
        <Avatar size={{xs: 24,sm: 32,md: 40,lg: 64,xl: 80,xxl: 100,}} src={iconm2} id="iconphoto"size="extralarge" />
        <a href="https://gadgets.ndtv.com/cryptocurrency/news/dogecoin-price-double-year-end-millionaire-glauber-contessoto-crypto-assets-hodl-2568084" target='_blank'>Read More</a>
        <img src="iconm2" alt="" />
    </div>
    <hr/>
    <div>
        <h5>The Economic Times</h5>
        <h1>TCS says seeing very good deal wins from cryptocurrency space</h1>
        <p>India’s largest information technology services company Tata Consultancy Services today said that it is seeing healthy deal wins from new areas in its platform business such as cryptocurrency exchanges.“We saw very good deal wins this quarter in the crypto space,” N. Ganapathy Subramaniam, chief operating officer at TCS NSE 1.10 % said in a post-earnings press conference.</p>
        <a href="https://economictimes.indiatimes.com/markets/cryptocurrency/tcs-says-seeing-very-good-deal-wins-from-cryptocurrency-space/articleshow/86871788.cms" target='_blank'>Read More</a>
    </div>

   
    <hr/>
    <div>
       <h5>The Hindu</h5>
       <h1>China proposes adding cryptocurrency mining to 'negative list' of industries</h1>
       <p>China has added cryptocurrency mining to a draft list of industries in which investment is restricted or prohibited, although it reduced the number of sectors on the list overall, a document released by the state planner showed on October 8.The so-called 'negative list' details sectors and industriest hat are off-limits to both Chinese and foreign investors.Regulators in China banned cryptocurrency trading and mining this year, with the country's central bank vowing to purge "illegal" cryptocurrency activities last month. The crackdown has prompted cryptocurrency exchanges to cut ties with Chinese users.The draft 2021 list of industries in which investment is either restricted or prohibited has been cut to 117, the National Development and Reform Commission said, down from 123 in 2020.</p>
       <a href="https://www.thehindu.com/news/international/china-proposes-adding-cryptocurrency-mining-to-negative-list-of-industries/article36909594.ece" target='_blank'>Read more</a> 
    </div>
    {/* <hr/> */}
    <hr/>
    <div>
       <h5>NDTV 360°</h5>
       <h1>Finding India’s next crypto unicorn</h1>
       <p>India’s largest cryptocurrency exchange, CoinSwitch Kuber, has achieved unicorn status in a funding round led by Andreessen Horowitz and Coinbase Ventures, underscoring investor interest in a market that’s faced with regulatory uncertainty.In fact, this is a16z’s first investment in India, and Coinbase Ventures’ second in an Indian crypto platform. In August, the corporate venture arm of Nasdaq-listed Coinbase backed CoinDCX in a $90-million funding round, making the company India’s First Cryto UNicorn</p>
       <a href="https://economictimes.indiatimes.com/tech/startups/indias-top-5-cryptocurrency-platforms-and-what-they-offer/articleshow/86812478.cms" target='_blank'>Read More</a> 
    </div>
    <hr/>
    <div>
        <a href="https://gadgets.ndtv.com/cryptocurrency" target='_blank'>To Read More News!!</a>
    </div>
    </div>
  );
};

export default News;
