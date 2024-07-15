import "./App.css";
import JoinUsPage from "./pages/join-us/JoinUsPage";
import { OpeningPage } from "./pages/opening-page/OpeningPage";
import ProductsPage from "./pages/products/ProductsPage";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto no-scrollbar max-h-fit font-sans">
      <OpeningPage />
      <ProductsPage />
      <JoinUsPage />
    </div>
  );
}

export default App;
