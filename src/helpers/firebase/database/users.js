import * as firebase from 'firebase';

export function findUserById(uid) {
    return firebase.database().ref('users/' + uid).once('value');
}

export function findCurrentUser(){
    const currentUser = firebase.auth().currentUser;
    if(firebase.auth().currentUser){
        return currentUser ;
    }else{
        return console.log("No currentUser, not Loged in") ;
    }
    
}

export function createUserData(users){
   const {uid, email, photoURL, displayName} = users;
   

   return firebase.database().ref('users/' + uid).set({
         email,
         photoURL, 
         displayName
         
    });
}

// export function updateProviderData({uid, providerData}){
//     const updates = {
//         ['users/' + uid + '/providerData']: providerData
//     };
//     return firebase.database().ref().update(updates);
// }