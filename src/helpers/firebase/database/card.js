import firebase from 'firebase';

export function addCard(link, description, imageLink){
    firebase.database().ref('card').push({
        link: link,
        description: description,
        image : imageLink
    });
}

export function deleteCard(key){
    console.log(key);
    firebase.database().ref('card').child(key).remove();
}
