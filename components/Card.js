import Link from 'next/link';

function Card({ title, description, href }) {
  return (
    <Link href={href} className="block bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
}

export default Card;
