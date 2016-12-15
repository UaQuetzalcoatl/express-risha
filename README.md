# express-risha

how to use
```
#clone the repo
# install dependencies
npm install
# run server
npm run start
```

### in order to retreive the whole list of phones make GET request
GET http://localhost:9000/api/phones

### create new phone. Make POST request

POST /api/phones HTTP/1.1
Host: localhost:9000
Content-Type: application/json;charset=UTF-8
Authorization: token 57ad0fee7c4dff4f5c3b13a4c73dcf8151258602
accept: application/vnd.github.v3+json
user-agent: axios/0.10.0
Content-Length: 187
Cache-Control: no-cache

{ "age": 3, "id": "dell-streak-7", "imageUrl": "img/phones/dell-streak-7.0.jpg", "name": "Dell Streak 7", "snippet": "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around." }
