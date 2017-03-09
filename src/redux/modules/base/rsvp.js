import firebase from 'firebase';
import _ from 'lodash';
import * as types from './actionTypes'

// export function fetchRsvps() {
// const d = new Date();
// const todayYear = d.getFullYear();
// const todayDate = d.getDate();
//     const Rsvp = firebase.database().ref().child('rsvp').limitToFirst(10);
//     Rsvp.once('value' , snap => {
//       console.log(snap.val());
//     });
//   return dispatch => {
//     Rsvp.on('value', snapshot => {
//       dispatch({
//         type: types.RSVP_FETCH,
//         payload: snapshot.val()
//       });
//     });
//   };
// }

const d = new Date();
  const todayMonth = d.getMonth()+1;
  const todayDate = d.getDate()

export function createRsvp(data) {
 return dispatch => firebase.database().ref('rsvp').child(data.title).push(data);
}

export function deleteRsvp(key) {
  return dispatch => firebase.database().ref().child('rsvp').child(key).remove();
}

export function getFirstRsvps() {
  
  const Rsvp = firebase.database().ref('rsvp').child(todayMonth).child(todayDate);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type:types.RSVP_GET_FIRST,
        payload: snap.val()
      });
    });
  }
}

export function getSecondRsvps() {
  const d = new Date();
  const todayMonth = d.getMonth()+1;
  const todayDate = d.getDate()
  const Rsvp = firebase.database().ref('rsvp').child(todayMonth).child(todayDate + 1);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type:types.RSVP_GET_SECOND,
        payload: snap.val()
      });
    });
  }
}

export function getThirdRsvps() {
  
  const Rsvp = firebase.database().ref('rsvp').child(todayMonth).child(todayDate + 2);
  return dispatch => {
    Rsvp.on('value', snap => {
      dispatch({
        type:types.RSVP_GET_THRID,
        payload: snap.val()
      });
    });
  }
}

// export function addPhotoAndPeople(user, id) {
//   console.log("im in the addPhotoAndPeople method", id);
  
//   return dispatch => firebase.database().ref('rsvp').child(todayMonth).child(todayDate).child(id).update({
//     "people" : 0,
//     "selected" : true,
//     "time" : "07:30PM~",
//     "title" : "저녘세션",
//     "day": "monday"
//   });
  
  
  
  
// }

