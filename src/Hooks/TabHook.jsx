import React, { useState } from "react";

const TabHook = () => {
  const [tabs, settabs] = useState([
    "Home",
    "Learning  pool",
    "Create project",
  ]);
  const [checkindex, setcheckindex] = useState(0);
  return { tabs, checkindex, setcheckindex };
};

export default TabHook;
