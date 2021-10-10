import React,{useEffect,useRef} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
// import alanBtn from "@alan-ai/alan-sdk-web";
// import React, { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    alanBtn({
      key : "0c4ad8508f473771f403d6caddc681862e956eca572e1d8b807a3e2338fdd0dc/prod",
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines') {
          console.log(articles);
        }
      }
    })
  }, [])
  return (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'  }}>10 October 2021  
          <Link to="/">
            CryptoWiki
          </Link> <br />
          CESS-O-HACK 3.0
        </Typography.Title >
        <Space>
          <Link class="Anchor_tag" to="/">Home</Link>
          <Link class="Anchor_tag" to="/exchanges">Exchanges</Link>
          <Link class="Anchor_tag" to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
  )
};

export default App;