import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App: React.FC = () => {
  return (
    <>
      <h1>Welcome to Joyful Design World !</h1>
      <Button> regular button</Button>
      <Button disabled>disabled button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        primary, large-size button
      </Button>
      <Button btnType={ButtonType.Link} href="www.google.com">
        link button, linking to Google.com
      </Button>
    </>
  );
};

export default App;
