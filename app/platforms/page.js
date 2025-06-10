import PageSection from '../../components/PageSection';
import Card from '../../components/Card';

export const metadata = {
  title: 'Plateformes – King Klown & KOA',
  description:
    'Vue d’ensemble des plateformes du mouvement : Konnaxion, Kristal Farms, Orgo.'
};

export default function PlatformsPage() {
  return (
    <>
      <PageSection>
        <h1>Nos Plateformes</h1>
        <p>
          KOA s’appuie sur des plateformes open‑source qui catalysent
          l’intelligence collective, optimisent l’organisation interne et
          offrent une infrastructure technologique durable.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <Card
            title="Konnaxion"
            description="Plateforme qui connecte l’humanité et amplifie son intelligence collective."
            href="/platforms/konnaxion"
          />
          <Card
            title="Kristal Farms"
            description="Infrastructure d’IA verte alimentée par de l’énergie propre pour démocratiser le savoir."
            href="/platforms/kristal-farms"
          />
          <Card
            title="Orgo"
            description="Cadre organisationnel agile pour remplacer la bureaucratie par des rôles fluides."
            href="/platforms/orgo"
          />
        </div>
      </PageSection>
    </>
  );
}
