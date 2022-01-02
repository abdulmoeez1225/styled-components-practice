import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import logo from "./logo.svg";
import StyledButton from "./components/Button/Button";
import {
  AnimatedLogo,
  FancyButton,
  SubmitButton,
} from "./components/Button/Button.styles";

const theme = {
  dark: { primary: "#000", text: "#fff" },
  light: { primary: "#000", text: "#fff" },
  fontFamily: "Segon UI",
};
const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AnimatedLogo src={logo} />
        <StyledButton>Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
