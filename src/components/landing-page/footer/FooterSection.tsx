interface FooterSectionProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  centered?: boolean;
}

export function FooterSection({ title, links, centered = false }: FooterSectionProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h3 className="font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-sm text-neutral-content/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
