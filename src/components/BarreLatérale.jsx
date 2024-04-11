import React from "react";
import Barre from "./Barre"
import Chercher from "./Chercher"
import Chats from "./Chats"
const BarreLatérale = () => {
  return (
    <div className="Sidebar">
      <Barre />
      <Chercher/>
      <Chats/>
    </div>
  );
};

export default BarreLatérale;