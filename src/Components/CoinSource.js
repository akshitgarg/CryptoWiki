import React, {Component} from 'react'


class CoinSource extends Component{

    componentDidMount(){
        console.log("Inside CheckData");
        console.log(this.props.dataobj);
    }

    render(){
        return (
            <div className="container-fluid">
            <div className="row coin-title d-flex justify-content-center">
            <h3 onClick={()=> {
                window.open(this.props.dataobj.data.links.homepage[0]);
            }}>{this.props.dataobj.data.name} - {this.props.dataobj.data.symbol}</h3>
            </div>
            <div className="row result text-center">
                <div className="col-xl-2 col-lg-2 col-md-2 result-table">
                   <table border="1px" >
                       <tbody>
                     <tr>
                       <td> <img src={this.props.dataobj.data.image.large} alt="Coin-Thumb" height="150px" width="150px" /></td>

                      </tr>
                      <tr>
                        <td>
                            <ul className="list-unstyled">
                            <li key="origin">country of origin -<br /> {this.props.dataobj.data.country_origin}<br /></li> 
                            <li key="birthdate"> Date of Apperance -<br/> {this.props.dataobj.data.genesis_date}</li>
                            <li key="capRank"> Market Cap Rank - {this.props.dataobj.data.market_cap_rank}</li>
                            <li key="Gecho"> Coin Gecho</li>
                            <li key="rank"> Rank - {this.props.dataobj.data.coingecko_rank}</li>
                            <li key="score"> Score - {this.props.dataobj.data.coingecko_score}</li>
                            <li key="devScore">Developer Score -<br /> {this.props.dataobj.data.developer_score}</li>
                            <li key="Community"> Community Sore -<br />{this.props.dataobj.data.community_score}</li>
                            <li key="liquidity"> Liquidity Sore -<br /> {this.props.dataobj.data.liquidity_score}</li>
                            <li key="PIS"> Public Interest Score -<br /> {this.props.dataobj.data.public_interest_score}</li>
                            </ul>
                        </td>
                         </tr>
                         </tbody>
                      </table>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 mt-5 ">
                    <p>{this.props.dataobj.data.description.en}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default CoinSource ;