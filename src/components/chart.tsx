import type { Data } from '~/pages/index.astro';
import { cn } from '~/utils/cn';

export const Chart: React.FC<{ data: Data }> = ({ data }) => {
  const currentDay = new Date().getDay();

  return (
    <div className="grid grid-cols-7 items-end">
      {data.map(({ day, amount }, index) => (
        <div className="group flex flex-col items-center gap-2" key={index}>
          <span className="select-none rounded bg-dark-brown p-1 text-xs font-bold text-very-pale-orange opacity-0 transition-opacity group-hover:opacity-100 lg:p-2 lg:text-sm">
            ${amount}
          </span>

          <span
            className={cn(
              'w-8 cursor-pointer rounded  transition-opacity hover:opacity-75 lg:w-12',
              index + 1 === currentDay ? 'bg-cyan' : 'bg-soft-red',
            )}
            style={{ height: `${amount * 2.75}px` }}
          />

          <span className="text-xs text-medium-brown lg:text-sm">{day}</span>
        </div>
      ))}
    </div>
  );
};
