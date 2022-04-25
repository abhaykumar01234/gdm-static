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
        <Route path="/gdm-static/qualityscore" element={<QualityScore />} />
        <Route path="/gdm-static/guidelines" element={<Guidelines />} />
        <Route path="/gdm-static/accountsfaq" element={<AccountsFAQ />} />
        <Route
          path="/gdm-static/listings_guidelines"
          element={<ListingsGuidelines />}
        />
        <Route
          path="/gdm-static/service_description"
          element={<ServiceDescription />}
        />
        <Route
          path="/gdm-static/buyer_discovery"
          element={<BuyerDiscovery />}
        />
        <Route path="/gdm-static/onboarding" element={<Onboarding />} />
        <Route
          path="/gdm-static/marketing_tools"
          element={<MarketingTools />}
        />
        <Route
          path="/gdm-static/competitive_comparisons"
          element={<CompetitiveComparisions />}
        />
      </Routes>
    </Router>
  );
}

export default App;
