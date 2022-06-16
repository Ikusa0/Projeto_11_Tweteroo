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
    tweet: "1",
  },
  {
    username: "bobesponja",
    tweet: "2",
  },
  {
    username: "bobesponja",
    tweet: "3",
  },
  {
    username: "bobesponja",
    tweet: "4",
  },
  {
    username: "bobesponja",
    tweet: "5",
  },
  {
    username: "bobesponja",
    tweet: "6",
  },
  {
    username: "bobesponja",
    tweet: "7",
  },
  {
    username: "bobesponja",
    tweet: "8",
  },
  {
    username: "bobesponja",
    tweet: "9",
  },
  {
    username: "bobesponja",
    tweet: "10",
  },
  {
    username: "bobesponja",
    tweet: "11",
  },
  {
    username: "bobesponja",
    tweet: "12",
  },
  {
    username: "bobesponja",
    tweet: "13",
  },
  {
    username: "bobesponja",
    tweet: "14",
  },
  {
    username: "bobesponja",
    tweet: "15",
  },
  {
    username: "bobesponja",
    tweet: "16",
  },
  {
    username: "bobesponja",
    tweet: "17",
  },
  {
    username: "bobesponja",
    tweet: "18",
  },
  {
    username: "bobesponja",
    tweet: "19",
  },
  {
    username: "bobesponja",
    tweet: "20",
  },
  {
    username: "bobesponja",
    tweet: "21",
  },
  {
    username: "bobesponja",
    tweet: "22",
  },
  {
    username: "bobesponja",
    tweet: "23",
  },
  {
    username: "bobesponja",
    tweet: "24",
  },
  {
    username: "bobesponja",
    tweet: "25",
  },
  {
    username: "bobesponja",
    tweet: "26",
  },
  {
    username: "bobesponja",
    tweet: "27",
  },
  {
    username: "bobesponja",
    tweet: "28",
  },
  {
    username: "bobesponja",
    tweet: "29",
  },
  {
    username: "bobesponja",
    tweet: "30",
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
  const page = parseInt(req.query.page);
  if (!page || page < 1) {
    res.status(400).send("Informe uma página válida!");
  }
  if (page === 1) {
    res.send(tweets.slice(-10).reverse());
  } else {
    res.send(tweets.slice(-10 * page, -10 * page + 10).reverse());
  }
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
