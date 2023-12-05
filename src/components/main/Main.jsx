import Navbar from "../navbar/Navbar";
import Card from "./Card";
import "./Main.scss";
import { data, categories } from "../../helper/data";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="typeList">
        {data.map((type) => {
          return <Card key={type.id} {...type} />;
        })}
      </div>
    </div>
  );
};

export default Main;
