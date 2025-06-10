import PageSection from '../../../components/PageSection';

export const metadata = {
  title: 'Konnaxion – Plateforme mondiale de savoir partagé',
  description:
    "Konnaxion récolte, valide et diffuse la connaissance pour accélérer l'innovation sociale et technologique.",
};

export default function KonnaxionPage() {
  return (
    <PageSection>
      <h1>Konnaxion</h1>

      <p>
        Konnaxion est le cœur informationnel du Mouvement&nbsp;KOA : une
        plateforme numérique mondiale où citoyens, experts et organisations
        publient, relisent et améliorent des contenus de référence. L’objectif :
        transformer la masse d’informations dispersées en un savoir validé,
        accessible et directement exploitable.
      </p>

      <h2>Principes clés</h2>
      <ul>
        <li>
          <strong>Démocratisation du savoir</strong> — accès libre, multilingue,
          connexion pensée pour les bandes passantes faibles.
        </li>
        <li>
          <strong>Révision par les pairs</strong> — chaque article ou
          proposition est relu par un cercle pluridisciplinaire avant
          publication.
        </li>
        <li>
          <strong>Vote Ekoh / Smart&nbsp;Vote</strong> — pondération des
          évaluations selon la compétence et l’éthique démontrées de chaque
          contributeur.
        </li>
        <li>
          <strong>Pas de duplication</strong> — la plateforme tisse des liens
          entre initiatives existantes plutôt que de les remplacer.
        </li>
      </ul>

      <h2>Modules principaux</h2>
      <ul>
        <li>
          <strong>KonnectED</strong> : parcours éducatifs modulaires et
          gratuits, certifiés à l’échelle internationale.
        </li>
        <li>
          <strong>keenKonnect</strong> : laboratoire d’innovation ouverte où les
          équipes co‑conçoivent des solutions concrètes.
        </li>
        <li>
          <strong>Ethikos</strong> : espace de délibération éthique aboutissant
          à des recommandations claires pour la gouvernance publique ou privée.
        </li>
      </ul>

      <h2>Impacts attendus</h2>
      <p>
        En réduisant les silos d’information, Konnaxion accélère la circulation
        des idées et améliore la qualité des décisions collectives. Couplée aux
        autres outils du mouvement, la plateforme vise à réduire les coûts
        d’innovation et à renforcer l’intelligence collective mondiale.
      </p>
    </PageSection>
  );
}
