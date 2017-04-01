import firebase from 'firebase';
import _ from 'lodash';

const d = new Date();
const todayMonth = d.getMonth()+1;


export function addPhotoAndPeople(user, id, month, date) {
  console.log("im in the addPhotoAndPeople method", id);
  const myRef = firebase.database().ref('rsvp/'+month+'/'+date+ '/' + id + '/number');
  
  
  firebase.database().ref('rsvp').child(month).child(date).child(id)
  .child('people/'+user.uid).set({
    name : user.displayName,
    photo : user.photoURL,
    time: Date.now()

  }).then(myRef.transaction( (current_value) => {
  return (current_value || 0) + 1;
}));
    
}
    


export function deletePhotoAndPoeple(user, id, month, date) {
  const myRef = firebase.database().ref('rsvp/'+month+'/'+date+ '/' + id + '/number');
  console.log("im in deletePhotoAndPoeple method !");
  
  firebase.database().ref('rsvp').child(month).child(date).child(id)
  .child('people/'+user.uid).remove().then(myRef.transaction( (current_value) => {
    if(current_value < 1){
    return 0;    
    }else{
      return (current_value - 1|| 0);
    }
}));

  }

export function getDate(month, day, date ) {
 
        const dayFilter = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                           "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                           "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthFilter = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.", ".Jan."];
        // const realMonth = monthFilter[month];
        const realNextMonth = monthFilter[month+1];
        const realDay = dayFilter[day];
        const Lastday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const todayMonth_lastday = Lastday[todayMonth-1];
  if(date > todayMonth_lastday){
    if(date - todayMonth_lastday === 1){
    return {
          month: todayMonth+1,
          render_month: realNextMonth,
          day: realDay,
          date: date - todayMonth_lastday 
        }
  }else{
    return {
          month: todayMonth+1,
          render_month: null,
          day: realDay,
          date: date - todayMonth_lastday 
        }  
  }
    
  }
  else{
      return {
          month: todayMonth,
          render_month: null,
          day: realDay,
          date: date
        }
  }
        
}

export function checkTomorrowRsvps(month, date, day){
  
  const TomorrowRsvpExist = firebase.database().ref('rsvp').child(month).child(date);
    TomorrowRsvpExist.once('value', snap => {
      if(!snap.exists()){
        checkDaySwitch(month, date, day);
      }
  });
}



export function checkDaySwitch(month, date, day){
  
  const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(month)
    .child(date);

        if (day === "Sunday") {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침영어", day: "Sunday"});
          Rsvp.push({people: 0, selected: false, time: "03:00~05:00PM", title: "점심영어", day: "Sunday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "무비나잇", day: "Sunday"});
        }

        if (day === "Monday") {
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘영어", day: "monday"});
        }

        if (day === "Tuesday") {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침영어", day: "Tuesday"});
          Rsvp.push({people: 0, selected: false, time: "01:00~02:30PM", title: "점심영어", day: "Tuesday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘영어", day: "Tuesday"});
        }

        if (day === "Wednesday") {
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘영어", day: "Wednesday"});
        }

        if (day === "Thursday") {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침영어", day: "Thursday"});
          Rsvp.push({people: 0, selected: false, time: "01:00~02:30PM", title: "점심영어", day: "Thursday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "저녘영어", day: "Thursday"});
        }

        if (day === "Friday") {
          Rsvp.push({people: 0, selected: false, time: "06:30PM~", title: "테드토킹", day: "Friday"});
          Rsvp.push({people: 0, selected: false, time: "07:30PM~", title: "네트워킹", day: "Friday"});
        }

        if (day === "Saturday") {
          Rsvp.push({people: 0, selected: false, time: "10:30~12:00AM", title: "아침영어", day: "Saturday"});
          Rsvp.push({people: 0, selected: false, time: "03:00~05:00PM", title: "점심영어", day: "Saturday"});
        }
}

export function deleteRsvp(key, month, date) {
  return firebase.database()
    .ref('rsvp')
    .child(month)
    .child(date)
    .child(key)
    .remove();
    
}

export function addRsvp(month, date, title, time, day){
    const Rsvp = firebase
    .database()
    .ref('rsvp')
    .child(month)
    .child(date);
    Rsvp.push({people:0, time:time, title:title, day:day, number:0})
}


