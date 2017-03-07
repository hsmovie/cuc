import firebase from 'firebase';

const RSVP_FETCH = "RSVP_FETCH";

export function fetchPosts() {
    const Rsvp = firebase.database().ref().child('rsvp');
  return dispatch => {
    Rsvp.on('value', snapshot => {
      dispatch({
        type: RSVP_FETCH,
        payload: snapshot.val()
      });
    });
  };
}


export function createRsvp(data) {
  return firebase.database().ref().child('rsvp').set(data);
}

export function deleteRsvp(key) {
  return firebase.database().ref().child('rsvp').child(key).remove();
}

