import Counter from "@/components/Counter";
import Greeting from "@/components/Greeting";
import UserProfile from "@/components/UserProfile";

import '@/styles/App.css'

function App() {
  return (
    <>
      <Greeting name={"Alfeov"} />
      <Counter />
      <UserProfile userId={4} />
    </>
  );
}

export default App


