import { MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export default function WhatsAppFloat() {
  const message = encodeURIComponent('Bonjour SNCI, je souhaite des informations sur vos prestations.');

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
