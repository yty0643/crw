import { getDatabase, onValue, ref, remove, set, get, push, child, update } from 'firebase/database';

class DBService { 
    write(userId, repo, fileName, time, content, path, msg) {
        const db = getDatabase();
        const postData = {
            repo: repo,
            fileName: fileName,
            time: time,
            content: content,
            path: path,
            msg: msg,
        };
        const newRegKey = push(child(ref(db), 'regs')).key;      
        const updates = {};
        // updates['/posts/' + newRegKey] = postData;
        updates['/user-regs/' + userId + '/'+repo+'/'+ newRegKey] = postData;
        return update(ref(db), updates);
    }
    
    async read(userId, repo) {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `user-regs/${userId}/${repo}`));
        return snapshot;
    }

    async readAll(userId) {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `user-regs/${userId}`));
        return snapshot;
    }
    
    readObserver(userId, repo, callback) {
        const db = getDatabase();
        const userRef = ref(db, 'user-regs/' + userId + '/' + repo);
        onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
        });
    }

    remove(userId,repo,key) {
        const db = getDatabase();
        const dataRef = ref(db, 'user-regs/' + userId + '/' + repo + '/' + key)
        remove(dataRef)
    }

    like(count) {
        const db = getDatabase();
        const postData = {
            count:count
        };   
        const updates = {};
        updates['/like/'] = postData;
        return update(ref(db), updates);
    }

    async readLike() {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `like/count`));
        return snapshot;
    }
    
    writeMsg(userId, comment) {
        const db = getDatabase();
        const postData = {
            comment: comment,
        };   
        const updates = {};
        updates[`/comments/${userId}/`] = postData;
        return update(ref(db), updates);
    }

    writeToken(userId, token) {
        const db = getDatabase();
        const postData = {
            token: token,
        };   
        const updates = {};
        updates[`/tokens/${userId}/`] = postData;
        return update(ref(db), updates);
    }
    
    async readToken(userId) {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `tokens/${userId}/token`));
        return snapshot;
    }

    removeToken(userId) {
        const db = getDatabase();
        const dataRef = ref(db, 'tokens/' + userId )
        remove(dataRef)
    }
}

export default DBService;