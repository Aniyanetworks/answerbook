import Script from "next/script";
import { siteConfig } from "@/lib/config";

// Loads GA4, Meta Pixel, and Google Ads only when their env-provided IDs are
// present, so the site works before any tracking IDs are issued.
export default function Analytics() {
  const { gtmId, ga4Id, metaPixelId, googleAdsId } = siteConfig.analytics;

  return (
    <>
      {gtmId && (
        // GTM's own snippet asks to sit "as high in the <head> as possible";
        // afterInteractive is the next/script equivalent and matches what
        // @next/third-parties' GoogleTagManager does. The matching <noscript>
        // iframe lives in app/layout.tsx, right after the opening <body>.
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          {/* beforeInteractive: the gtag() stub must exist before any component
              effect (e.g. ConversionTracking on /thank-you) can call it — an
              afterInteractive inline script isn't guaranteed to run first.
              Valid in the App Router root layout despite the lint rule below,
              which predates App Router support (Next.js docs recommend this). */}
          {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
          <Script id="ga4-init" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}

      {!ga4Id && googleAdsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
          {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
          <Script id="google-ads-init" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');
            `}
          </Script>
        </>
      )}

      {metaPixelId && (
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script id="meta-pixel-init" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
