import React, {Component} from 'react';
import axios from 'axios';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class CurrencyInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {symbol: props.symbol, 
            logo: props.logo, name: props.name, site: props.site,
            price : null} 
        this.getPrice = this.getPrice.bind(this);
    }

    componentDidMount() {
        this.getPrice();
        setInterval(this.getPrice, 20000);
    }

    getPrice() {
        const { symbol } = this.state;
        console.log('Get Price');

        axios.get(`https://chain.so/api/v2/get_price/${symbol}/USD`)
            .then(ret => { console.log(ret.data.data.prices.find(x => x.exchange === 'bitfinex').price)
                this.setState(() => ({
                    price: ret.data.data.prices.find(x => x.exchange === 'bitfinex').price,
                }))
            })
    }
    

    render() {
        const {name, logo, price, symbol, site } = this.state;

        return(
            <div className={`card ${symbol} col-md-5 col-sm-12 col-xs-12`}>
                <div className='header row col-xs-12'>
                    <div className={`name ${symbol} col-xs-12`}>
                        {name}{' '}({symbol})
                    </div>
                </div>
                <div className='contents row col-xs-12'>
                    <div className='logo col-xs-3'>
                        <img src={`${logo}`} alt={symbol} />
                    </div>

                    <div className={`price ${symbol} col-xs-9`}>
                        ${price}
                    </div>
                    <div className={`site ${symbol} text-center`}>
                        <a target='_blank' href={`https://${site}`}>{site}</a>
                    </div>
                     
                </div>                
            </div>
        ) 
    }
}

export default CurrencyInfo;