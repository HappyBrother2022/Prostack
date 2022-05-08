import "../styles/toggleswitch.css";
import { updateDoc, doc } from "firebase/firestore";
import { useAuth } from "../context";
import { db } from "../firebase/firebase";
import { useState } from "react";

function ToggleSwitch() {
  const [collabToggle, setCollabToggle] = useState(false);
  const {
    currentUser: { uid, isOpenForCollab },
    getUser,
  } = useAuth();
  const docRef = doc(db, "users", uid);

  const toggleHandler = async (e) => {
    try {
      await updateDoc(docRef, {
        isOpenForCollab: collabToggle,
      });
      await getUser(uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="toggle-switch flex gap-4 items-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={isOpenForCollab}
          onChange={() => {
            setCollabToggle((collabToggle) => !collabToggle);
            toggleHandler();
          }}
        />
        <span className="slider round"></span>
      </label>
      <label>Open for Collaborations</label>
    </div>
  );
}

export { ToggleSwitch };
