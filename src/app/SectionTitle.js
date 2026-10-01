import Reveal from './Reveal';

export default function SectionTitle({ kicker, title, sub }) {
  return (
    <Reveal className="text-center mb-14 md:mb-20">
      <div className="inline-flex items-center gap-3 text-ball font-semibold tracking-[0.3em] text-xs mb-4">
        <span className="h-px w-8 bg-ball" />
        {kicker}
        <span className="h-px w-8 bg-ball" />
      </div>
      <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide">{title}</h2>
      {sub && (
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">{sub}</p>
      )}
    </Reveal>
  );
}
