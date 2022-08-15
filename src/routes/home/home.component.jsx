import "../../categories.styles.scss";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://media.king5.com/assets/KING/images/8441f0c9-9fdf-412b-bb08-ad9a858cd5c6/8441f0c9-9fdf-412b-bb08-ad9a858cd5c6_1920x1080.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/01145231/01082017_LeatherJackets_01.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://media.istockphoto.com/photos/shoes-sport-in-front-store-buing-in-market-center-picture-id1147089911?k=20&m=1147089911&s=612x612&w=0&h=o1CFg31pAB6g4aQSc9Ol6pqDRUWp_OZIdoLX443bt40=",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://previews.123rf.com/images/melnyk58/melnyk582009/melnyk58200900316/154527309-happy-shopping-wear-clothing-shop-during-sales-summer-or-autumn-collection-young-women-looking-for-n.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?k=20&m=1293366109&s=612x612&w=0&h=sZxIOdBctJdLx71165XgRdUAQo1SPkGsRPzDR5IF4-Y=",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
