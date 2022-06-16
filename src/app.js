import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  },
];

app.post("/sing-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweets.slice(-10));
});

app.get("/tweets/:username", (req, res) => {
  const username = req.params.username;
  const user = users.filter((user) => user.username === username);
  let avatar;
  if (user.length > 0) {
    avatar = user[0].avatar;
    const userTweets = tweets
      .filter((tweet) => tweet.username === username)
      .map((tweet) => ({ username, avatar, tweet: tweet.tweet }));
    res.send(userTweets);
  } else {
    res.send([]);
  }
});

app.listen(5000, () => {
  console.log(`listening on port 5000`);
});
