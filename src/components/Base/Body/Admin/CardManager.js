import React, { Component } from 'react';
// import * as cardDB from 'helpers/firebase/database/card';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as card from 'redux/modules/base/card';
import * as cardDB from 'helpers/firebase/database/card';
import { Table } from 'semantic-ui-react';
class CardManager extends Component {

    componentWillMount(){
        this.props.fetchCards();
    }
    
    deleteCard = (key) => {
           cardDB.deleteCard(key);
    }

    renderManager = () => {
        const {deleteCard} = this;
        return _.map(this.props.cards, (card, index) => {
            const des = card.description.slice(0, 100);
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{des}</Table.Cell>
          <Table.Cell>{card.link}</Table.Cell>
          <Table.Cell>{card.image}</Table.Cell>
          <Table.Cell>
          <button onClick={() => deleteCard(index)}>
          delete
          </button>
          </Table.Cell>
        </Table.Row>
            );
        
        });
    }


    render() {
        const {renderManager} = this;
        return (
    <Table definition className="card-table-wrapper">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>설명</Table.HeaderCell>
          <Table.HeaderCell>링크</Table.HeaderCell>
          <Table.HeaderCell>이미지링크</Table.HeaderCell>
          <Table.HeaderCell>삭제</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderManager()}
      
      </Table.Body>
    </Table>
            
        );
    }
}
const mapStateToProps = (state) => {
  return { 
      cards: state.base.card.cards
 };
}
export default connect(mapStateToProps, card)(CardManager);