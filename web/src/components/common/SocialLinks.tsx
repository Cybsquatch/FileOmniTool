import React from "react";
import { SOCIAL_LINKS } from "@/lib/seo-helpers";

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  size = "md",
  showLabels = false,
}) => {
  const iconSizeClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const itemPaddingClass = size === "sm" ? "p-1.5" : "p-2";

  const links = [
    {
      name: "GitHub",
      href: SOCIAL_LINKS.github,
      label: "@Cybsquatch",
      icon: (
        <svg
          className={iconSizeClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
      hoverColor: "hover:text-zinc-900 hover:bg-zinc-200/60 dark:hover:text-white dark:hover:bg-zinc-800",
    },
    {
      name: "X (Twitter)",
      href: SOCIAL_LINKS.twitter,
      label: "@cybsquatch",
      icon: (
        <svg
          className={iconSizeClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: "hover:text-zinc-900 hover:bg-zinc-200/60 dark:hover:text-white dark:hover:bg-zinc-800",
    },
    {
      name: "YouTube",
      href: SOCIAL_LINKS.youtube,
      label: "@riccardobelli447",
      icon: (
        <svg
          className={iconSizeClass}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      ),
      hoverColor: "hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-950/40",
    },
  ];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.name} di Cybsquatch`}
          title={`${link.name} (${link.label})`}
          className={`inline-flex items-center gap-1.5 rounded-lg text-zinc-500 transition-colors dark:text-zinc-400 ${itemPaddingClass} ${link.hoverColor}`}
        >
          {link.icon}
          {showLabels && (
            <span className="text-xs font-medium">{link.label}</span>
          )}
        </a>
      ))}
    </div>
  );
};
