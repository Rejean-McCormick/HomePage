import PageSection from '../../components/PageSection';

export const metadata = {
  title: 'Contact – King Klown & KOA',
  description:
    'Collaborations, partenariats, contribution : contactez l’équipe KOA.'
};

export default function ContactPage() {
  return (
    <PageSection>
      <h1>Contact</h1>

      <p>
        Questions ? Propositions ? Partenariats ? Écrivez‑nous directement :
      </p>

      <p>
        <a href="mailto:k@kingklown.com" className="text-primary">
          k@kingklown.com
        </a>
      </p>
    </PageSection>
  );
}
