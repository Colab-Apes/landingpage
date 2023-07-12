import React, { useState } from "react";

const TabHook = () => {
  const [tabs, settabs] = useState([
    "Home",
    "Learning  Pool",
    "Create Project",
  ]);
  const [checkindex, setcheckindex] = useState(0);
  return { tabs, checkindex, setcheckindex };
};

export default TabHook;
