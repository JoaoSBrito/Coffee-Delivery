import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ShoppingCartProvider>
  );
}

export default App;
