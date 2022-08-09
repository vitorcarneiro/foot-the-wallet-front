// import { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Container from "./style";

function Home() {
  //  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <Container>
      <NavigationBar />
      <div>Hello, Vitor!</div>
    </Container>
  );
}

export default Home;
