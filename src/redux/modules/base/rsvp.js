import firebase from 'firebase';
import _ from 'lodash';
import * as types from './actionTypes'
import * as firebaseHelper from 'helpers/firebase/database/rsvp';

// export function fetchRsvps() { const d = new Date(); const todayYear =
// d.getFullYear(); const todayDate = d.getDate();     const Rsvp =
// firebase.database().ref().child('rsvp').limitToFirst(10); Rsvp.once('value' ,
// snap => {       console.log(snap.val());     });   return dispatch => {
// Rsvp.on('value', snapshot => {       dispatch({ type: types.RSVP_FETCH,
// payload: snapshot.val()       });     }); }; }

const d = new Date();
const todayMonth = d.getMonth() + 1;
const todayDate = d.getDate();
const todayDay = d.getDay();

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
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(todayMonth)
    .child(todayDate);

  return dispatch => {
    Rsvp.on('value', snap => {
      if (!snap.exists()) {
        firebaseHelper.checkDaySwitch(todayDay);
      }
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
    .child(todayMonth)
    .child(todayDate + 1);
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
    .child(todayMonth)
    .child(todayDate + 2);
  return dispatch => {
    Rsvp.on('value', snap => {
     
      dispatch({
        type: types.RSVP_GET_THRID,
        payload: snap.val()
      });
    });
  }
}

export function addPhotoAndPeople(user, id) {
  console.log("im in the addPhotoAndPeople method", id);
  const myRef = firebase
    .database()
    .ref('rsvp/' + todayMonth + '/' + todayDate + '/' + id + '/number');

  // myRef.transaction( (current_value) => {   return (current_value || 0) + 1;
  // });

  return dispatch => {
    firebase
      .database()
      .ref('rsvp')
      .child(todayMonth)
      .child(todayDate)
      .child(id)
      .child('people/' + user.uid)
      .set({photo: user.photoURL})
      .then(myRef.transaction((current_value) => {
        return (current_value || 0) + 1;
      }));

  }

}

export function deletePhotoAndPoeple(user, id) {
  const myRef = firebase
    .database()
    .ref('rsvp/' + todayMonth + '/' + todayDate + '/' + id + '/number');
  console.log("im in deletePhotoAndPoeple method !");

  return dispatch => {
    firebase
      .database()
      .ref('rsvp')
      .child(todayMonth)
      .child(18)
      .child(id)
      .child('people/' + user.uid)
      .remove()
      .then(myRef.transaction((current_value) => {
        return (current_value || 0) - 1;
      }));

  }
}

export function getUserId() {}