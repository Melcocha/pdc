import React from 'react';
import ProNavbar from './components/ProNavbar';
import ProHero from './components/ProHero';
import ProCandidates from './components/ProCandidates';
import ProBlueprintProposals from './components/ProBlueprintProposals';
import ProRadialMunicipalPlan from './components/ProRadialMunicipalPlan';
import ProDistrictImpact from './components/ProDistrictImpact';
import ProQuoteBanner from './components/ProQuoteBanner';
import ProFooter from './components/ProFooter';
import HomeWelcome from './components/HomeWelcome';
import PlatformChooser from './components/PlatformChooser';
import SocialHub from './components/SocialHub';
import LegislativeVideos from './components/LegislativeVideos';
import MunicipalHero from './components/MunicipalHero';
import MeetLuis from './components/MeetLuis';
import { useHashRoute } from './hooks/useHashRoute';
import './App.css';
import './pages.css';

// Inicio: video de bienvenida del alcalde + elección de plataforma + redes
function HomePage() {
  return (
    <>
      <HomeWelcome />
      <PlatformChooser />
    </>
  );
}

// Plataforma Municipal (Luis Ortiz, La Unión Sur)
function MunicipalPage() {
  return (
    <>
      <MunicipalHero />
      <MeetLuis />
      <ProRadialMunicipalPlan />
    </>
  );
}

// Plataforma Legislativa (Willian Méndez + Carmen Torres)
function LegislativePage() {
  return (
    <>
      <ProHero />
      <LegislativeVideos />
      <ProCandidates />
      <ProBlueprintProposals />
      <ProDistrictImpact />
    </>
  );
}

const pages = {
  '/': HomePage,
  '/municipal': MunicipalPage,
  '/legislativa': LegislativePage,
};

export default function App() {
  const route = useHashRoute();
  const Page = pages[route];

  return (
    <div className="pro-app">
      <ProNavbar route={route} />

      <main key={route} className="page-enter">
        <Page />

        {/* Redes activas + código QR (al final de cada página) */}
        <SocialHub />

        {/* Mensaje central y lema */}
        <ProQuoteBanner />
      </main>

      <ProFooter />
    </div>
  );
}
