import "./App.css";
import JoinUsPage from "./pages/join-us/JoinUsPage";
import { OpeningPage } from "./pages/opening-page/OpeningPage";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  return (
    <div>
      <OpeningPage />
      <ProductsPage />
      <JoinUsPage />
    </div>
  );
}

export default App;
