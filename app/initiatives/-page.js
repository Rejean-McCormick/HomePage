// app/initiatives/page.js
import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Initiatives – Mouvement KOA',
  description:
    'Aperçu des grandes initiatives : projet politique KOA, transformation coopérative Desjardins et plan international de paix et de reconstruction pour l’Ukraine.',
};

export default function InitiativesPage() {
  return (
    <PageSection>
      <h1>Initiatives Stratégiques</h1>

      {/* Mouvement politique */}
      <section>
        <h2>Mouvement Politique KOA</h2>
        <p>
          Le Mouvement KOA se présente comme une force politique de
          transformation systémique. Son ambition : moderniser la gouvernance en
          s’appuyant sur l’intelligence collective, la transparence et la
          compétence validée. Une fois élu, le mouvement déploiera des outils
          tels que :
        </p>
        <ul>
          <li>
            <strong>Ekoh / Smart Vote</strong> – pondération méritocratique des
            décisions pour faire émerger les idées les plus rigoureuses ;
          </li>
          <li>
            <strong>Konnaxion</strong> – plateforme de savoir partagé pour
            éclairer en temps réel les politiques publiques ;
          </li>
          <li>
            <strong>Orgo</strong> – architecture organisationnelle
            agile garantissant la continuité des services même en cas de crise.
          </li>
        </ul>
        <p>
          L’objectif est de placer le citoyen au centre du processus
          décisionnel : budgets participatifs à grande échelle, publication
          systématique des données clés et contrôle démocratique des
          institutions.
        </p>
      </section>

      {/* Desjardins */}
      <section>
        <h2>Transformation Coopérative Desjardins</h2>
        <p>
          KoA accompagne le Mouvement Desjardins dans une refonte de son modèle
          coopératif, fidèle à l’héritage d’Alphonse Desjardins tout en
          intégrant les technologies de pointe.
        </p>

        <h3>Axes majeurs</h3>
        <ul>
          <li>
            <strong>Service bénévole exemplaire</strong> – rémunération
            symbolique de la présidence, limitation stricte des écarts salariaux
            dans la haute direction.
          </li>
          <li>
            <strong>Démocratie directe numérique</strong> – votes sécurisés
            (plateforme Ethikos), budgets participatifs et suivi public des
            décisions.
          </li>
          <li>
            <strong>Transparence intégrale</strong> – publication ouverte des
            états financiers, des politiques d’investissement et des niveaux de
            rémunération.
          </li>
          <li>
            <strong>Redistribution équitable</strong> – ristournes rééquilibrées
            au profit des petits épargnants ; part fixe allouée à des projets
            communautaires choisis par les membres.
          </li>
          <li>
            <strong>Guichets de confiance</strong> – les caisses locales
            deviennent points d’authentification, d’examens certifiants et
            d’actes notariés simplifiés.
          </li>
        </ul>

        <h3>Impacts attendus</h3>
        <p>
          Desjardins aspire à devenir un modèle international de finance
          coopérative transparente et performante : gouvernance alignée sur les
          membres, développement local renforcé, philanthropie à frais réduits
          et adoption massive des outils numériques.
        </p>
      </section>

      {/* Ukraine */}
      <section>
        <h2>Initiative Internationale : Paix et Reconstruction en Ukraine</h2>

        <h3>1. Cessez‑le‑feu et neutralité</h3>
        <ul>
          <li>Cessez‑le‑feu immédiat sous supervision de l’ONU.</li>
          <li>
            Ukraine démilitarisée et reconnue neutre dans sa Constitution,
            protégée par des garanties de sécurité internationales.
          </li>
        </ul>

        <h3>2. Référendums supervisés</h3>
        <p>
          Organisation de votes démocratiques dans les régions contestées
          (Crimée, Donbass) pour décider librement de leur statut, avec présence
          d’observateurs neutres.
        </p>

        <h3>3. Force neutre de maintien de la paix</h3>
        <p>
          Déploiement d’une coalition de nations non alignées, inspirée du
          concept d’« Armée du Pape », chargée d’assurer la sécurité et la
          logistique humanitaire.
        </p>

        <h3>4. Reconstruction massive</h3>
        <ul>
          <li>
            <strong>Fonds mondial</strong> alimenté par les grandes puissances
            pour rebâtir logements, écoles, hôpitaux et réseaux de transport.
          </li>
          <li>
            <strong>Olympiques de la Construction</strong> – compétition
            internationale mobilisant entreprises, ONG et apprentis pour
            accélérer les chantiers et valoriser les compétences.
          </li>
          <li>
            Programmes de soutien psychologique, réhabilitation des soldats et
            échanges culturels pour réconcilier les populations.
          </li>
        </ul>

        <h3>5. Vision à long terme</h3>
        <p>
          Transformer l’Ukraine en « terre internationale » : zone neutre,
          carrefour économique et culturel entre l’Est et l’Ouest, exemple
          exportable de résolution pacifique des conflits.
        </p>
      </section>

      {/* Principes transversaux */}
      <section>
        <h2>Principes Transversaux</h2>
        <dl>
          <dt>Participation citoyenne</dt>
          <dd>Gouvernance ouverte, votes sécurisés, budget participatif.</dd>

          <dt>Innovation technologique</dt>
          <dd>
            Utilisation d’outils numériques de pointe pour la transparence et
            l’efficacité.
          </dd>

          <dt>Durabilité</dt>
          <dd>
            Gouvernance responsable, impact social mesurable, respect des
            écosystèmes.
          </dd>

          <dt>Coopération internationale</dt>
          <dd>
            Coalition d’acteurs publics, privés et communautaires pour relever
            les défis globaux.
          </dd>
        </dl>
      </section>
    </PageSection>
  );
}
