import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

class AuthService{
    constructor() {
        this.auth = getAuth();
        this.provider = new GithubAuthProvider();
    }

    signIn(){
        return(
        signInWithPopup(this.auth, this.provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
        
            // The signed-in user info.
            const user = result.user;
            // ...
            return user
        })
        )
    }

    signOut(){
        this.auth.signOut();
    }

    authChange(goto) {       
        this.auth.onAuthStateChanged(user => {
            user && goto(user)
        })
    }
}

export default AuthService;