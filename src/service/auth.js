import { getAuth, signInWithPopup, GithubAuthProvider, browserSessionPersistence, setPersistence  } from "firebase/auth";

class AuthService{
    
    async signIn() {
        const auth = getAuth();
        const provider = new GithubAuthProvider();
        await setPersistence(auth, browserSessionPersistence);
        return await signInWithPopup(auth, provider);
    }

    signOut() {
        const auth = getAuth();
        return auth.signOut()
    }

    getUser(callback) {
        const auth = getAuth();
        const user = auth.currentUser;
        callback(user);
    }
}

export default AuthService;