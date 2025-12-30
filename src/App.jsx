import React, { useState } from "react";
import QuestionScreen from "./components/QuestionScreen";
import AckScreen from "./components/AckScreen";

export default function App() {
  const [isMad, setIsMad] = useState(false);
  return isMad ? <AckScreen /> : <QuestionScreen onYes={() => setIsMad(true)} />;
}
