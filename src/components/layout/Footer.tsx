import { Link } from 'react-router-dom'
import { Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'

const links = {
  'Plataforma': [
    { label: 'Pilates', href: '/pilates' },
    { label: 'Treinamento', href: '/training' },
    { label: 'Saúde Mental', href: '/mental' },
    { label: 'Nutrição', href: '/nutrition' },
    { label: 'Gisele IA', href: '/ai' },
  ],
  'Empresa': [
    { label: 'Sobre nós', href: '/sobre' },
    { label: 'Profissionais', href: '/profissionais' },
    { label: 'Blog', href: '/blog' },
    { label: 'Imprensa', href: '/imprensa' },
    { label: 'Carreiras', href: '/carreiras' },
  ],
  'Suporte': [
    { label: 'Central de Ajuda', href: '/ajuda' },
    { label: 'Contato', href: '/contato' },
    { label: 'Status', href: '/status' },
    { label: 'Privacidade (LGPD)', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand-900 text-sky-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-brand-700 flex items-center justify-center">
                <span className="text-cream-50 font-serif font-bold text-lg">G</span>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-lg leading-none">Gisele Neymerk</div>
                <div className="text-[10px] text-brand-400 font-medium tracking-widest uppercase mt-0.5">Saúde Integral</div>
              </div>
            </div>
            <p className="text-brand-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transformando vidas através do movimento, equilíbrio emocional e cuidado humano. Uma plataforma premium de saúde integral.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="p-2 rounded-xl bg-brand-800 hover:bg-brand-700 text-brand-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" className="p-2 rounded-xl bg-brand-800 hover:bg-brand-700 text-brand-400 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
              <a href="mailto:contato@giseleneymerk.com.br" className="p-2 rounded-xl bg-brand-800 hover:bg-brand-700 text-brand-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sky-400 hover:text-sky-200 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-wrap gap-6 text-brand-400 text-sm">
          <div className="flex items-center gap-2"><Phone size={14} /> (21) 99999-9999</div>
          <div className="flex items-center gap-2"><Mail size={14} /> contato@giseleneymerk.com.br</div>
          <div className="flex items-center gap-2"><MapPin size={14} /> Rio de Janeiro, RJ — Brasil</div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-brand-800 flex flex-wrap items-center justify-between gap-4">
          <p className="text-brand-500 text-xs">
            © {new Date().getFullYear()} Gisele Neymerk. Todos os direitos reservados. CNPJ 00.000.000/0001-00
          </p>
          <p className="text-brand-500 text-xs flex items-center gap-1">
            Feito com <Heart size={12} className="text-rose-500" /> para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}
