import firebase from 'firebase';


const d = new Date();
const todayMonth = d.getMonth()+1;
const todayDate = d.getDate()

export function addPhotoAndPeople(user, id) {
  console.log("im in the addPhotoAndPeople method", id);
  const myRef = firebase.database().ref('rsvp/'+todayMonth+'/'+todayDate+ '/' + id + '/number');
  
  
  firebase.database().ref('rsvp').child(todayMonth).child(todayDate).child(id)
  .child('people/'+user.uid).set({
    photo: user.photoURL
  }).then(myRef.transaction( (current_value) => {
  return (current_value || 0) + 1;
}));
    
}
    


export function deletePhotoAndPoeple(user, id) {
  const myRef = firebase.database().ref('rsvp/'+todayMonth+'/'+todayDate+ '/' + id + '/number');
  console.log("im in deletePhotoAndPoeple method !");
  
  firebase.database().ref('rsvp').child(todayMonth).child(18).child(id)
  .child('people/'+user.uid).remove().then(myRef.transaction( (current_value) => {
  return (current_value || 0) - 1;
}));

  }

export function checkDaySwitch(day){
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(todayMonth)
    .child(todayDate);
  console.log("im in the if sentences!");

        if (day === 0) {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침세션", day: "Sunday"});
          Rsvp.push({people: 0, selected: false, time: "03:00~05:00PM", title: "점심세션", day: "Sunday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "무비나이트", day: "Sunday"});
        }

        if (day === 1) {
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘세션", day: "monday"});
        }

        if (day === 2) {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침세션", day: "Tuesday"});
          Rsvp.push({people: 0, selected: false, time: "01:00~02:30PM", title: "점심세션", day: "Tuesday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘세션", day: "Tuesday"});
        }

        if (day === 3) {
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘세션", day: "Wednesday"})
        }

        if (day === 4) {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침세션", day: "Thursday"});
          Rsvp.push({people: 0, selected: false, time: "01:00~02:30PM", title: "점심세션", day: "Thursday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘세션", day: "Thursday"});
        }

        if (day === 5) {
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "네트워킹 파티", day: "Friday"});
        }

        if (day === 6) {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침세션", day: "Saturday"});
          Rsvp.push({people: 0, selected: false, time: "03:00~05:00PM", title: "점심세션", day: "Saturday"})
        }
}
