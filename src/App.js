import "./styles.css";
import { AddAndSub } from "./useState-excercise/AddAndSub";
import { AgeChecker } from "./useState-excercise/AgeChecker";
import { ColorOfText } from "./useState-excercise/ColorOfText";
import { TwitterCharCount } from "./useState-excercise/TwitterCharCount";

export default function App() {
  return (
    <div className="App">
      {/* <AgeChecker /> */}
      {/* <AddAndSub/> */}
      {/* <ColorOfText /> */}
      <TwitterCharCount />
    </div>
  );
}
