import { useState } from "react";

export const DisableEdit = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: ""
  });
  const [disableName, setDisableName] = useState(false);
  const [disableEmail, setDisableEmail] = useState(false);
  const [msg, setMSg] = useState("");

  const submitForm = () => {
    if (userDetails.name !== "" && userDetails.email !== "") {
      setMSg("data saved");
      setDisableName(true);
      setDisableEmail(true);
    }
  };

  const editName = () => {
    return setDisableName(false);
  };

  const editEmail = () => {
    return setDisableEmail(false);
  };
  return (
    <div>
      <h2>Profile</h2>
      <h4>Name</h4>
      <input
        placeholder="name"
        value={userDetails.name}
        disabled={disableName}
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
      ></input>
      <button onClick={() => editName()}>Edit</button>
      <h4>Email</h4>
      <input
        placeholder="email"
        value={userDetails.email}
        disabled={disableEmail}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
      ></input>
      <button onClick={() => editEmail()}>Edit</button>
      <button onClick={() => submitForm()}>Sumbit</button>
      <h2>{msg}</h2>
    </div>
  );
};
