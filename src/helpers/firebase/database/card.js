import firebase from 'firebase';

export function addCard(title, link, description, imageLink){
    firebase.database().ref('card').push({
        title: title,
        link: link,
        description: description,
        image : imageLink
    });
}

export function deleteCard(key){
    firebase.database().ref('card').child(key).remove();
}