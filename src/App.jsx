import React from 'react';
import ProNavbar from './components/ProNavbar';
import ProHero from './components/ProHero';
import ProCandidates from './components/ProCandidates';
import ProBlueprintProposals from './components/ProBlueprintProposals';
import ProRadialMunicipalPlan from './components/ProRadialMunicipalPlan';
import ProDistrictImpact from './components/ProDistrictImpact';
import ProQuoteBanner from './components/ProQuoteBanner';
import ProFooter from './components/ProFooter';
import './App.css';

export default function App() {
  return (
    <div className="pro-app">
      {/* 1. Sleek Top Bar & Sticky Modern Navbar */}
      <ProNavbar />

      <main>
        {/* 2. Editorial Magazine Hero Section */}
        <ProHero />

        {/* 3. Fórmula Electoral: Willian Méndez (Casilla 1) & Carmen Torres (Suplente) */}
        <ProCandidates />

        {/* 4. 12 Legislative Initiatives (Filterable & Searchable) */}
        <ProBlueprintProposals />

        {/* 5. 9-Axes Municipal Plan Wheel (Luis Ortiz - Economía Familiar) */}
        <ProRadialMunicipalPlan />

        {/* 6. Territorial Impact by Districts of La Unión */}
        <ProDistrictImpact />

        {/* 7. Authentic Core Message & Slogan Banner */}
        <ProQuoteBanner />
      </main>

      {/* 8. Pro Minimalist Footer */}
      <ProFooter />
    </div>
  );
}
