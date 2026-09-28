import { ReactNode } from 'react';

interface MacWindowProps {
  children: ReactNode;
  label?: string;
  className?: string;
  barClassName?: string;
  bodyClassName?: string;
}

/**
 * Wraps content in a Mac-style browser/window chrome: three traffic-light
 * dots + an optional label in the top bar. Used across the site's major
 * cards so they read as distinct "windows" rather than flat boxes — the
 * bar and dots are theme-aware via CSS (see .mac-window-bar in globals.css).
 */
export default function MacWindow({
  children,
  label,
  className = '',
  barClassName = '',
  bodyClassName = '',
}: MacWindowProps) {
  return (
    <div className={`mac-window ${className}`}>
      <div className={`mac-window-bar ${barClassName}`}>
        <span className="mac-window-dot bg-[#ff5f57]" />
        <span className="mac-window-dot bg-[#febc2e]" />
        <span className="mac-window-dot bg-[#28c840]" />
        {label && (
          <span className="ml-2 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 truncate">
            {label}
          </span>
        )}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
