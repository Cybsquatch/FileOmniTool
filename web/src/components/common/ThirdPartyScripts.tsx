"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { CookiePreferences } from "./CookieConsent";

interface ThirdPartyScriptsProps {
  gaId?: string;
  adsenseId?: string;
}

export const ThirdPartyScripts: React.FC<ThirdPartyScriptsProps> = ({
  gaId,
  adsenseId,
}) => {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const stored = localStorage.getItem("omnitool_cookie_consent");
      if (stored) {
        try {
          const parsed: CookiePreferences = JSON.parse(stored);
          setAnalyticsConsent(parsed.analytics);
          setMarketingConsent(parsed.marketing);
        } catch {
          setAnalyticsConsent(false);
          setMarketingConsent(false);
        }
      }
    };

    checkConsent();

    const handleConsentUpdated = (e: Event) => {
      const customEvent = e as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        setAnalyticsConsent(customEvent.detail.analytics);
        setMarketingConsent(customEvent.detail.marketing);
      }
    };

    window.addEventListener("cookie_consent_updated", handleConsentUpdated);
    return () => window.removeEventListener("cookie_consent_updated", handleConsentUpdated);
  }, []);

  return (
    <>
      {/* Google Analytics 4 (Only loaded with affirmative Analytics consent) */}
      {analyticsConsent && gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname
                });
              `,
            }}
          />
        </>
      )}

      {/* Google AdSense (Only loaded with affirmative Marketing/Ads consent) */}
      {marketingConsent && adsenseId && (
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          crossOrigin="anonymous"
        />
      )}

      {/* Adsterra Social Bar (Only loaded with affirmative Marketing/Ads consent) */}
      {marketingConsent && (
        <Script
          id="adsterra-social-bar"
          strategy="lazyOnload"
          src="https://bauval.org/14/46a6710c86363dcadad3933eb0c19482"
          data-cfasync="false"
        />
      )}
    </>
  );
};
