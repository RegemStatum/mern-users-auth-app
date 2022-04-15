import GlobalContext from "./context/GlobalContext";
import GlobalStyle from "./styles/globalStyles";
import PagesRouting from "./pages/PagesRouting";

function App() {
  return (
    <GlobalContext>
      <GlobalStyle />
      <PagesRouting />
    </GlobalContext>
  );
}

export default App;
