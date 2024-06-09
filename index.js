require('dotenv').config();
const express = require('express')
const app = express()
const githubData = {
    "login": "astro-israfil",
    "id": 153127727,
    "node_id": "U_kgDOCSCLLw",
    "avatar_url": "https://avatars.githubusercontent.com/u/153127727?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/astro-israfil",
    "html_url": "https://github.com/astro-israfil",
    "followers_url": "https://api.github.com/users/astro-israfil/followers",
    "following_url": "https://api.github.com/users/astro-israfil/following{/other_user}",
    "gists_url": "https://api.github.com/users/astro-israfil/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/astro-israfil/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/astro-israfil/subscriptions",
    "organizations_url": "https://api.github.com/users/astro-israfil/orgs",
    "repos_url": "https://api.github.com/users/astro-israfil/repos",
    "events_url": "https://api.github.com/users/astro-israfil/events{/privacy}",
    "received_events_url": "https://api.github.com/users/astro-israfil/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-12-06T19:36:06Z",
    "updated_at": "2024-04-23T05:09:11Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login to a express js App</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('@astronicIsrafil');
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})