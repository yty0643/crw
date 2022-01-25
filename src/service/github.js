class GithubService{
    constructor() {
        this.myHeaders = new Headers({
            Authorization:process.env.REACT_APP_GITHUB_TOKEN, //User token security required.
        });
    }

    list() {
        return (
            fetch("https://api.github.com/user/repos", {
                headers: this.myHeaders,
            })
        )
    }

    async getLastObjSha() { //get current commit object's sha
        const res = await fetch("https://api.github.com/repos/yty0643/3big/commits", {
            method: "GET",
            headers: this.myHeaders,
            redirect: "follow",
        })
        return await res.json();
    }

    getNewBlobSha() { //get new blob's sha
        return(
            fetch("https://api.github.com/repos/yty0643/3big/git/blobs", {
                method: 'POST',
                headers: this.myHeaders,
                redirect: 'follow',
                body:JSON.stringify({"content":"hello world"}),
            })
        )
    } 

    getNewTreeSha(objsha,blobsha) { //get new tree's sha
        return(
            fetch("https://api.github.com/repos/yty0643/3big/git/trees", {
                method: 'POST',
                headers: this.myHeaders,
                redirect: 'follow',
                body: JSON.stringify({
                    base_tree:objsha,
                    tree: [{
                        "path": "src/components/main/text.txt",
                        "mode": "100644",
                        "type": "blob",
                        "sha": blobsha,
                    }]
                })
            })
        )
    }

    getNewCommitSha(objsha,treeSha) { //get new commit's sha
        return(
            fetch("https://api.github.com/repos/yty0643/3big/git/commits", {
                method: 'POST',
                headers: this.myHeaders,
                redirect: 'follow',
                body: JSON.stringify({
                    "message": "add test commit from 3big-reactwebpage",
                    "parents": [
                        objsha
                    ],
                    "tree": treeSha,
                })
            })
        )
    }

    getRef(commitSha) {
        return(
            fetch("https://api.github.com/repos/yty0643/3big/git/ref/heads/master", {
                method: 'PATCH',
                headers: this.myHeaders,
                redirect: 'follow',
                body: JSON.stringify({
                   "sha":commitSha,
                })
            })
        )
    }
}

export default GithubService;