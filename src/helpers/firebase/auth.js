import * as firebase from 'firebase';
const auth = (function(){
    const providers = {
        facebook: (new firebase.auth.FacebookAuthProvider()),
        google: (new firebase.auth.GoogleAuthProvider())
        
    }
    return {
           google: () => {
        return firebase.auth().signInWithPopup(providers.google);
        
        },
        facebook: () => {
            console.log("im in facebook");
        return firebase.auth().signInWithPopup(providers.facebook);
        
        },
        logout: () => {
            firebase.auth().signOut();
            window.location.reload();
        },
        getExistingProvider: async (email) => {
            const existingProviders = await firebase.auth().fetchProvidersForEmail(email);
            const provider = existingProviders[0].split('.')[0];
            return provider;
        },
        linkAccount: async ({credential, provider}) => {
            const result = await firebase.auth().signInWithPopup(providers[provider]);
            return result.user.link(credential);
        },
        resolveDuplicate: async (error) => {
            const { credential, email } = error;
            const existingProviders = await firebase.auth().fetchProvidersForEmail(email);

            const provider = existingProviders[0].split('.')[0];
            const result = await firebase.auth().signInWithPopup(providers[provider]);
            return result.user.link(credential);
        },
        authStateChanged: (user) => {
            //콜백은 파이어베이스 User를 파라미터로 받음
           firebase.auth().onAuthStateChanged(user);  
        }
    }
        
})();

export default auth;    