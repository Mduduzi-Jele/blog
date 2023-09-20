import Navigation from "./Navigation";
import Posts from "./Posts";
import Footer from "./Footer";

export interface Comment {
  name: string;
  dateTime: Date;
  message: string;
}

const Home = () => {
  return (
    <div>
      <Navigation />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
