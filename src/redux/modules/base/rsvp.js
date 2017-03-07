import firebase from 'firebase';
import _ from 'lodash';
import * as types from './actionTypes'

export function fetchRsvps() {
const d = new Date();
const todayYear = d.getFullYear();
const todayDate = d.getDate();
    const Rsvp = firebase.database().ref().child('rsvp').limitToFirst(10);
    Rsvp.once('value' , snap => {
      console.log(snap.val());
    });
  return dispatch => {
    Rsvp.on('value', snapshot => {
      dispatch({
        type: types.RSVP_FETCH,
        payload: snapshot.val()
      });
    });
  };
}


export function createRsvp(data) {
 return dispatch => firebase.database().ref('rsvp').child(data.title).set(data);
}

export function deleteRsvp(key) {
  return dispatch => firebase.database().ref().child('rsvp').child(key).remove();
}

export function getTodayRsvps() {
  const d = new Date();
  const todayMonth = String(d.getMonth()+1);
  const todayDate = String(d.getDate());
  const Rsvp = firebase.database().ref('rsvp').child(todayMonth).child(todayDate);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type:types.RSVP_GET_TODAYRSVP,
        payload: snap.val()
      });
    });
  }
}



