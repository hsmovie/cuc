import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as card from 'redux/modules/base/card';
import _ from 'lodash';
class Study extends Component {

    componentWillMount() {
        this.props.fetchCards();
    }

    renderCards = () => {
        return _.map(this.props.cards, (card, index) => {
            return (
                <a href={card.link} key={index}>
                <figure>
                    <img src={card.image}/>
                    <figcaption>{card.description}</figcaption>
                </figure>     
                </a>
            );
        })
        
    }

    render() {
        const {renderCards} = this;
        return (
            <div id="columns">
                {renderCards()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      cards: state.base.card.cards
 };
}
export default connect(mapStateToProps, card)(Study);