import firebase from 'firebase';
import _ from 'lodash';
import * as types from './actionTypes'
import * as rsvpdb from 'helpers/firebase/database/rsvp';

const d = new Date();
const todayMonth = d.getMonth() + 1;
const dateData = [];

for(let i = 1 ; i < 11 ; i++){
            const date = d.getDate()+i;
            const day = d.getDay()+i;
             dateData[i] = rsvpdb.getDate(todayMonth, day, date);
        }

export function createRsvp(data) {
  return dispatch => firebase
    .database()
    .ref('rsvp')
    .child(data.title)
    .push(data);
}

export function deleteRsvp(key, month, date) {
  return dispatch => firebase
    .database()
    .ref('rsvp')
    .child(month)
    .child(date)
    .child(key)
    .remove();
}

export function getFirstRsvps() {
  const todayDate = d.getDate();
  
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(todayMonth)
    .child(todayDate);

  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_FIRST,
        payload: snap.val()
      });
    });
  }
}

export function getSecondRsvps() {

  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[1].month)
    .child(dateData[1].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      
      dispatch({
        type: types.RSVP_GET_SECOND,
        payload: snap.val()
      });
    });
  }
}

export function getThirdRsvps() {

  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[2].month)
    .child(dateData[2].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_THRID,
        payload: snap.val()
      });
    });
  }
}

export function getFourthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[3].month)
    .child(dateData[3].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_FOUR,
        payload: snap.val()
      });
    })
  }
}

export function getFifthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[4].month)
    .child(dateData[4].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_FIVE,
        payload: snap.val()
      });
    })
  }
}

export function getSixthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[5].month)
    .child(dateData[5].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_SIX,
        payload: snap.val()
      });
    })
  }
}

export function getSeventhRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[6].month)
    .child(dateData[6].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_SEVEN,
        payload: snap.val()
      });
    })
  }
}

export function getEighthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[7].month)
    .child(dateData[7].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_EIGHT,
        payload: snap.val()
      });
    })
  }
}

export function getNinthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[8].month)
    .child(dateData[8].date);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_NINE,
        payload: snap.val()
      });
    })
  }
}

export function getTenthRsvps() {
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(dateData[9].month)
    .child(dateData[9].date);
    rsvpdb.checkTomorrowRsvps(dateData[10].month, dateData[10].date, dateData[10].day);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type: types.RSVP_GET_TEN,
        payload: snap.val()
      });
    });
  }
  
  
}



export function getUserId() {}