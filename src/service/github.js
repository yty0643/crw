class GithubService{
    constructor() {
        this.myHeaders = new Headers({
            Authorization:process.env.REACT_APP_GITHUB_TOKEN, //User token security required.
        });
    }

    async list() {
        const res = await fetch(`https://api.github.com/user/repos`, {
            headers: this.myHeaders,
        })
        return await res.json();
    }

    async tokenTest(token) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/user/repos`, {
            headers: myHeaders,
        })
        return await res.json();
    }

    async getLastObjSha(userId, repo) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/commits`, {
            method: "GET",
            headers: this.myHeaders,
            redirect: "follow",
        })
        return await res.json();
    }
      
    async getNewBlobSha(userId, repo, content) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/blobs`, {
            method: 'POST',
            headers: this.myHeaders,
            redirect: 'follow',
            body:JSON.stringify({content}),
        })
        return await res.json();
    }

    async getNewTreeSha(userId, repo, path, objsha,blobsha) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/trees`, {
            method: 'POST',
            headers: this.myHeaders,
            redirect: 'follow',
            body: JSON.stringify({
                base_tree:objsha,
                tree: [{
                    "path": path,
                    "mode": "100644",
                    "type": "blob",
                    "sha": blobsha,
                    // "content":"hello world",
                }]
            })
        })
        return await res.json();
    }

    async getNewCommitSha(userId, repo, msg, objsha, treeSha) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/commits`, {
            method: 'POST',
            headers: this.myHeaders,
            redirect: 'follow',
            body: JSON.stringify({
                "message": msg,
                "parents": [
                    objsha
                ],
                "tree": treeSha,
            })
        })
        return await res.json();
    }

    async updateReference(userId, repo, commitSha) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/refs/heads/master`, {
            method: "POST",
            headers: this.myHeaders,
            redirect: "follow",
            body: JSON.stringify({
                "ref": "refs/heads/master",
                "sha": commitSha
            })
        })
        return await res.json();
    }

    async getTree(userId, repo, treeSha) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/trees/${treeSha}?recursive=1`, {
            method: "GET",
            headers: this.myHeaders,
            redirect: "follow",
        })
        return await res.json();
    }

    async getBlob(userId, repo, blobSha) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/blobs/${blobSha}`, {
            method: 'GET',
            headers: this.myHeaders,
            redirect: 'follow',
        })
        return await res.json();
    }

    async getLanguages(userId, repo) {
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/languages`, {
            method: 'GET',
            headers: this.myHeaders,
            redirect: 'follow',
        })
        return await res.json();
    }
}

export default GithubService;