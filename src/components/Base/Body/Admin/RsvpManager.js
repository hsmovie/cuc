import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';
import * as rsvpDB from 'helpers/firebase/database/rsvp';


class RsvpManager extends Component {

    deleteRsvp = (key,month, date) => {
        console.log(month, date)
        rsvpDB.deleteRsvp(key, month, date);
    }


    renderOne = () => {
        const {deleteRsvp} = this;
        return _.map(this.props.rsvp, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[0].month}/{this.props.dateData[0].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[0].month , this.props.dateData[0].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }

    renderTwo = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpTwo, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[1].month}/{this.props.dateData[1].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[1].month , this.props.dateData[1].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }

    renderThree = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpThree, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[2].month}/{this.props.dateData[2].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[2].month , this.props.dateData[2].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }

     renderFour = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpFour, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[3].month}/{this.props.dateData[3].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[3].month , this.props.dateData[3].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
    renderFive = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpFive, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[4].month}/{this.props.dateData[4].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[4].month , this.props.dateData[4].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
    renderSix = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpSix, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[5].month}/{this.props.dateData[5].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[5].month , this.props.dateData[5].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
    renderSeven = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpSeven, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[6].month}/{this.props.dateData[6].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[6].month , this.props.dateData[6].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
    renderEight = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpEight, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[7].month}/{this.props.dateData[7].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[7].month , this.props.dateData[7].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
     renderNine = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpNine, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[8].month}/{this.props.dateData[8].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[8].month , this.props.dateData[8].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }
    renderTen = () => {
        
        const {deleteRsvp} = this;
        return _.map(this.props.rsvpTen, (rsvp, index) => {
            return (
        <Table.Row key={index}>
         <Table.Cell/>
          <Table.Cell>{this.props.dateData[9].month}/{this.props.dateData[9].date}</Table.Cell>
          <Table.Cell>{rsvp.title}</Table.Cell>
          <Table.Cell>{rsvp.time}</Table.Cell>
          <Table.Cell>{rsvp.number}</Table.Cell>
          <Table.Cell><button onClick={() => deleteRsvp(index, this.props.dateData[9].month , this.props.dateData[9].date )}>delete</button></Table.Cell>
        </Table.Row>
            );
        })
    }

    

    render() {
        const {renderOne, renderTwo, renderThree, renderFour, renderFive, renderSix, renderSeven, renderEight, renderNine, renderTen} = this;

        
        

        return (
    <Table definition className="rsvp-table-wrapper">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>날짜</Table.HeaderCell>
          <Table.HeaderCell>제목</Table.HeaderCell>
          <Table.HeaderCell>시간</Table.HeaderCell>
          <Table.HeaderCell>오는사람들</Table.HeaderCell>
          <Table.HeaderCell>삭제</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {renderOne()}
        {renderTwo()}
        {renderThree()}
        {renderFour()}
        {renderFive()}
        {renderSix()}
        {renderSeven()}
        {renderEight()}
        {renderNine()}
        {renderTen()}
        
      </Table.Body>


    </Table>
        );
    }
}

export default RsvpManager;