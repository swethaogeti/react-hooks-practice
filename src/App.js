import "./styles.css";
import { AddAndSub } from "./useState-excercise/AddAndSub";
import { AgeChecker } from "./useState-excercise/AgeChecker";

import { ColorOfText } from "./useState-excercise/ColorOfText";
import { Disablesubmit } from "./useState-excercise/DisableSubmit";
import { PasswordMatcher } from "./useState-excercise/PasswordMatcher";
import { TwitterCharCount } from "./useState-excercise/TwitterCharCount";

export default function App() {
  return (
    <div className="App">
      {/* <AgeChecker /> */}
      {/* <AddAndSub/> */}
      {/* <ColorOfText /> */}
      {/* <TwitterCharCount /> */}
      {/* <PasswordMatcher /> */}
      <Disablesubmit />
    </div>
  );
}
