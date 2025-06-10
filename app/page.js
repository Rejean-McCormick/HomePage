// app/page.js
import Card from '../components/Card';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            King Klown &amp; KOA
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            Un mouvement sociotechnique mêlant fiction surréaliste et innovation
            concrète pour transformer la société.
          </p>
        </div>
      </section>

      {/* ===== PLATEFORMES ===== */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Nos Plateformes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Konnaxion"
            description="Plateforme qui connecte l’humanité et amplifie son intelligence collective."
            href="/platforms/konnaxion"
          />
          <Card
            title="Kristal Farms"
            description="Infrastructure d’IA verte alimentée par énergie propre pour démocratiser le savoir."
            href="/platforms/kristal-farms"
          />
          <Card
            title="Orgo"
            description="Outil organisationnel open‑source pour une gestion plus agile et collaborative."
            href="/platforms/orgo"
          />
        </div>
      </section>

      {/* ===== INITIATIVES ===== */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Nos Initiatives</h2>
        <div className="grid gap-6">
          <Card
            title="Le Surreal"
            description="Approche mêlant la fiction surréaliste et l’action concrète pour inspirer le changement."
            href="/initiatives/surreal"
          />
        </div>
      </section>

      {/* ===== TOUS LES LIENS ===== */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Tous nos liens</h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            ['https://kingklown.xyz/koa', 'Plans / Roadmap KOA'],
            ['https://kingklown.com', 'Présentation générale'],
            ['https://kingklown.ca/', 'Mouvement politique (EN)'],
            ['https://www.kingklown.wiki', 'Konnaxion (Wiki)'],
            ['https://kingklown.store', 'Branded Clothes'],
            [
              'https://open.spotify.com/show/2hMamhJENVfWsULSuUVEG4?si=69f66bdd97e34071',
              'Podcast « Mythos King Klown »'
            ],
            ['https://www.youtube.com/@KingKlownXYZ', 'YouTube'],
            ['https://www.tumblr.com/blog/kingklownxyz', 'Tumblr'],
            ['https://www.tiktok.com/@kingklown.xyz', 'TikTok'],
            ['https://x.com/KingKlownXYZ', 'X (Twitter)'],
            ['https://www.twitch.tv/kingklownxyz', 'Twitch'],
            [
              'https://www.facebook.com/profile.php?id=61567073454490',
              'Facebook'
            ],
            ['https://www.instagram.com/kingklown.xyz/', 'Instagram'],
            ['https://github.com/Rejean-McCormick/', 'GitHub (dev)'],
            ['mailto:k@kingklown.com', 'k@kingklown.com']
          ].map(([url, label]) => (
            <li key={url}>
              <a
                href={url}
                target={url.startsWith('mailto') ? '_self' : '_blank'}
                rel={
                  url.startsWith('mailto') ? undefined : 'noopener noreferrer'
                }
                className="block w-full bg-white border border-gray-200 rounded-lg
                           px-4 py-3 text-center text-primary
                           hover:bg-primary hover:text-white transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
