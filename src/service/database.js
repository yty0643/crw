import { getDatabase, onValue, ref, remove, set, get, push, child, update } from 'firebase/database';

class DBService { 
    write(userId, repo, time, content, path, msg) {
        const db = getDatabase();
        const postData = {
            repo: repo,
            time: time,
            content: content,
            path: path,
            msg: msg,
        };
        const newRegKey = push(child(ref(db), 'regs')).key;      
        const updates = {};
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
    
    read2(userId, repo, callback) {
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
}

export default DBService;