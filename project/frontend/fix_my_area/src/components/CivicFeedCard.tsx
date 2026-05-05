import Link from 'next/link';

interface IssueCardProps {
  category: string;
  title: string;
  status: string;
  statusVariant: 'success' | 'warning' | 'info' | 'neutral';
  authority: string;
  distance: string;
  timeAgo: string;
  support: number;
  concern: number;
  urgent: number;
  locationLabel: string;
  href?: string;
}

const statusClasses = {
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-yellow-100 text-yellow-700',
  info: 'bg-sky-100 text-sky-700',
  neutral: 'bg-slate-100 text-slate-700'
};

export function CivicFeedCard({
  category,
  title,
  status,
  statusVariant,
  authority,
  distance,
  timeAgo,
  support,
  concern,
  urgent,
  locationLabel,
  href = '/issues'
}: IssueCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-3xl border border-slate-200 p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
          {category}
        </span>
        <span className="text-xs text-slate-500">{distance}</span>
      </div>

      <h2 className="text-lg font-semibold text-slate-900 leading-7 mb-3">
        {title}
      </h2>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex flex-wrap gap-2 text-sm text-slate-500">
          <span>{locationLabel}</span>
          <span>•</span>
          <span>{timeAgo}</span>
        </div>
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[statusVariant]}`}>
          {status}
        </span>
      </div>

      <p className="text-sm text-slate-600 mb-5">{authority}</p>

      <div className="grid grid-cols-3 gap-2 mb-5 text-center text-sm text-slate-700">
        <div className="rounded-2xl bg-slate-50 px-3 py-3">
          <div className="text-base font-semibold text-slate-900">{support}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Support</div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-3 py-3">
          <div className="text-base font-semibold text-slate-900">{concern}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Concern</div>
        </div>
        <div className="rounded-2xl bg-slate-50 px-3 py-3">
          <div className="text-base font-semibold text-slate-900">{urgent}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Urgent</div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-3">
        <Link href={href} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View Details →
        </Link>
        <span className="text-xs text-slate-400">Updated {timeAgo}</span>
      </div>
    </div>
  );
}
