import React from 'react';
import CurrencyInfo from './components';

function App() {

  const Bitcoin = {
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: '/btc.png',
    site: 'www.bitcoin.org'
  }
  const Litecoin = {
    name: 'Litecoin',
    symbol: 'LTC',
    logo: '/ltc.png',
    site: 'www.litecoin.org'
  }

    return (
      <div className="App col-xs-12">
        <CurrencyInfo 
          name={Bitcoin.name}
          symbol={Bitcoin.symbol}
          logo={Bitcoin.logo}
          site={Bitcoin.site}
        />
        <CurrencyInfo 
          name={Litecoin.name}
          symbol={Litecoin.symbol}
          logo={Litecoin.logo}
          site={Litecoin.site}
        />
      </div>
    );
  }

export default App;
