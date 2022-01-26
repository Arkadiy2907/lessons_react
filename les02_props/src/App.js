import Test from "./Test";
import Header from "./header/header";
import Goods from "./Goods";

const headerDate = {
  site_name: "my sait",
  nav: [
    { "link": "nav1", "text": "my link1" },
    { "link": "nav2", "text": "my link2" },
    {"link": "nav3", "text": "my link3"},
  ]
}

const goods = [
  { "title": "apple", "cost": 200, "image": "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png" },
  { "title": "pear", "cost": 300, "image": "https://cdn1.iconfinder.com/data/icons/fresh-fruit-2/128/pear-512.png" },
  { "title": "apple", "cost": 400, "image": "https://cdn1.iconfinder.com/data/icons/fruit-filled-line-1/64/food_fruit_vegetable_vegetarian_organic_orange_mandarin-512.png" }
]

function App() {
  return (
    <>
      <Header data={ headerDate }/>
      <Test />
      {goods.map(item => <Goods title={ item.title} cost={ item.cost} image={ item.image} key={item.image} />)}
    </>
  );
}

export default App;
