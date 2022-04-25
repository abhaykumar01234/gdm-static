import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AccountsFAQ from "./pages/AccountsFAQ";
import BuyerDiscovery from "./pages/BuyerDiscovery";
import CompetitiveComparisions from "./pages/CompetitiveComparisions";
import Guidelines from "./pages/Guidelines";
import ListingsGuidelines from "./pages/ListingsGuidelines";
import MarketingTools from "./pages/MarketingTools";
import Onboarding from "./pages/Onboarding";
import QualityScore from "./pages/QualityScore";
import ServiceDescription from "./pages/ServiceDescription";
import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <Routes>
        <Route path="/qualityscore" element={<QualityScore />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/accountsfaq" element={<AccountsFAQ />} />
        <Route path="/listings_guidelines" element={<ListingsGuidelines />} />
        <Route path="/service_description" element={<ServiceDescription />} />
        <Route path="/buyer_discovery" element={<BuyerDiscovery />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/marketing_tools" element={<MarketingTools />} />
        <Route
          path="/competitive_comparisons"
          element={<CompetitiveComparisions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
