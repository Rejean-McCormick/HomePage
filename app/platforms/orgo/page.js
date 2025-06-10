// app/platforms/orgo/page.js
import PageSection from '../../../components/PageSection';

export const metadata = {
  title: 'Orgo – Système organisationnel universel',
  description:
    'Orgo unifie la communication interne et automatise les workflows, améliorant l’efficacité, la fiabilité et la transparence de toute organisation.',
};

export default function OrgoPage() {
  return (
    <PageSection>
      <h1>Orgo</h1>

      <p>
        Orgo est une plateforme de communication organisationnelle qui transforme
        la circulation de l’information en combinant messagerie, gestion de tâches
        et base de connaissances. Chaque message, requête ou projet y est routé
        automatiquement au rôle compétent, même en cas d’absence ou de turnover.
      </p>

      <h2>Fondements organisationnels</h2>
      <ul>
        <li>
          <strong>Modularité</strong> – un ensemble de modules activables ou
          désactivables selon la taille et le secteur de l’organisation.
        </li>
        <li>
          <strong>Communication par rôles</strong> – les informations sont
          adressées à des fonctions (Responsable RH, Support technique…) plutôt
          qu’à des individus, garantissant la continuité de service.
        </li>
        <li>
          <strong>Résilience hors ligne</strong> – Orgo fonctionne sans
          connexion Internet, avec synchronisation automatique dès la remise en
          ligne.
        </li>
        <li>
          <strong>Flux universels</strong> – règles claires pour acheminer,
          escalader et suivre chaque demande jusqu’à sa résolution.
        </li>
        <li>
          <strong>Amélioration continue</strong> – revues périodiques des
          processus pour optimiser les workflows et résoudre les points de
          friction.
        </li>
      </ul>

      <h2>Fonctionnalités clés</h2>
      <p>
        Orgo centralise tous les canaux internes et applique un routage intelligent :
        les requêtes non traitées dans un délai donné sont automatiquement
        escaladées, et des rapports dynamiques mettent en lumière les goulots
        d’étranglement pour permettre des ajustements rapides.
      </p>

      <h2>Types d’organisations et rôles</h2>
      <p>
        Conçu pour s’adapter aussi bien aux petites associations qu’aux grandes
        entreprises ou administrations, Orgo reflète l’organigramme réel via des
        rôles (administrateur, coordinateur, technicien, bénévole…) pour acheminer
        les informations au bon destinataire, sans interruption de service.
      </p>

      <h2>Bénéfices concrets</h2>
      <ul>
        <li>
          <strong>Efficacité</strong> – traitement plus rapide des demandes et
          allègement des tâches administratives répétitives.
        </li>
        <li>
          <strong>Fiabilité</strong> – traçabilité complète des échanges et
          continuité même en cas de panne ou d’absence.
        </li>
        <li>
          <strong>Transparence</strong> – journal d’audit pour chaque message et
          suivi clair des responsabilités.
        </li>
        <li>
          <strong>Coût réduit</strong> – moins de temps perdu dans la relance des
          informations et réduction des erreurs humaines.
        </li>
        <li>
          <strong>Adaptabilité</strong> – configuration sur mesure et montée en
          charge sans changer d’outil.
        </li>
      </ul>
    </PageSection>
  );
}
