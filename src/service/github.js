class GithubService{
    async list(token) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/user/repos`, {
            headers: myHeaders,
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

    async getLastObjSha(token, userId, repo) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/commits`, {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        })
        return await res.json();
    }
      
    async getNewBlobSha(token, userId, repo, content) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/blobs`, {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body:JSON.stringify({content}),
        })
        return await res.json();
    }

    async getNewTreeSha(token, userId, repo, path, objsha, blobsha) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/trees`, {
            method: 'POST',
            headers: myHeaders,
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

    async getNewCommitSha(token, userId, repo, msg, objsha, treeSha) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/commits`, {
            method: 'POST',
            headers: myHeaders,
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

    async updateReference(token, userId, repo, commitSha) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/refs/heads/master`, {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify({
                "ref": "refs/heads/master",
                "sha": commitSha
            })
        })
        return await res.json();
    }

    async getTree(token, userId, repo, treeSha) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/trees/${treeSha}?recursive=1`, {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        })
        return await res.json();
    }

    async getBlob(token, userId, repo, blobSha) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/git/blobs/${blobSha}`, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        })
        return await res.json();
    }

    async getLanguages(token, userId, repo) {
        const myHeaders = new Headers({
            Authorization:token,
        });
        const res = await fetch(`https://api.github.com/repos/${userId}/${repo}/languages`, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        })
        return await res.json();
    }
}

export default GithubService;