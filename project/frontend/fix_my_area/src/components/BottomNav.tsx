import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Feed', href: '/', icon: '🏠' },
  { label: 'Map', href: '/map', icon: '🗺️' },
  { label: 'Raise', href: '/raise-issue', icon: '➕', isPrimary: true },
  { label: 'Alerts', href: '/alerts', icon: '🔔' },
  { label: 'Profile', href: '/profile', icon: '👤' }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur-md sm:hidden">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex flex-col items-center justify-center gap-1 px-3 py-2 text-[0.7rem] font-semibold ${
                item.isPrimary
                  ? 'bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/10 h-14 w-14 justify-center'
                  : isActive
                  ? 'text-blue-600'
                  : 'text-slate-500'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!item.isPrimary && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
