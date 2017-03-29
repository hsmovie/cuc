import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as card from 'redux/modules/base/card';
import _ from 'lodash';
import ScrollableAnchor from 'react-scrollable-anchor';
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
        <ScrollableAnchor id={'STUDY'}>
            <div className="study-wrapper">
                <div className="study-header">STUDY <span className="hide">진행하고있는 스터디</span></div>
                <div className="study-sub-header">카드를 클릭하면 해당링크로 이동합니다.</div>
                <div className="study-cards"  id="columns">
                    {renderCards()}
                </div>
            </div>
        </ScrollableAnchor>
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      cards: state.base.card.cards
 };
}
export default connect(mapStateToProps, card)(Study);