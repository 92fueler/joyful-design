import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

const App: React.FC = () => {
  return (
    <>
      <h1>Welcome to Joyful Design World !</h1>
      <Button btnType={ButtonType.Default}>default button</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger, small-size button
      </Button>
      <Button disabled btnType={ButtonType.Primary}>
        disabled primary button
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        primary, large-size button
      </Button>

      <Button btnType={ButtonType.Link} href="http://www.google.com">
        link button, linking to Google.com
      </Button>
      <Button btnType={ButtonType.Link} disabled href="http://www.google.com">
        link button, linking to Google.com
      </Button>
    </>
  );
};

export default App;
