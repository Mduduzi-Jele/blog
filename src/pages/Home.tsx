import Navigation from "./Navigation";
import Posts from "./Posts";

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
    </div>
  );
};

export default Home;
