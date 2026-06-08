import { useEffect } from "react";
import { site, projects } from "@/content/site";

/**
 * Injects sitewide SEO meta, OpenGraph, Twitter, and JSON-LD tags.
 * Mounted once from the page; cleans up on unmount.
 */
const SEO = () => {
  useEffect(() => {
    const title = `${site.brand} | ${site.role}`;
    const description = `${site.owner}. ${site.tagline} Available for freelance Django and React engagements.`;
    const url = typeof window !== "undefined" ? window.location.origin : "/";

    document.title = title;
    document.documentElement.lang = "en";

    const tags: Array<{ selector: string; attrs: Record<string, string> }> = [
      { selector: 'meta[name="description"]', attrs: { name: "description", content: description } },
      { selector: 'meta[name="author"]', attrs: { name: "author", content: `${site.owner} · ${site.brand}` } },
      { selector: 'meta[name="theme-color"]', attrs: { name: "theme-color", content: "#0A192F" } },
      { selector: 'meta[property="og:title"]', attrs: { property: "og:title", content: title } },
      { selector: 'meta[property="og:description"]', attrs: { property: "og:description", content: description } },
      { selector: 'meta[property="og:type"]', attrs: { property: "og:type", content: "website" } },
      { selector: 'meta[property="og:url"]', attrs: { property: "og:url", content: url } },
      { selector: 'meta[property="og:site_name"]', attrs: { property: "og:site_name", content: site.brand } },
      { selector: 'meta[name="twitter:card"]', attrs: { name: "twitter:card", content: "summary_large_image" } },
      { selector: 'meta[name="twitter:title"]', attrs: { name: "twitter:title", content: title } },
      { selector: 'meta[name="twitter:description"]', attrs: { name: "twitter:description", content: description } },
    ];

    const created: HTMLElement[] = [];
    tags.forEach(({ selector, attrs }) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
        created.push(el);
      } else {
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      }
    });

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
      created.push(canonical);
    }
    canonical.href = "/";

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: site.owner,
          jobTitle: site.role,
          email: `mailto:${site.email}`,
          url,
          worksFor: { "@type": "Organization", name: site.brand },
          sameAs: [site.github, site.linkedin].filter(Boolean),
        },
        {
          "@type": "WebSite",
          name: site.brand,
          url,
          description,
        },
        {
          "@type": "ItemList",
          name: "Selected Work",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              name: p.title,
              description: p.description,
              keywords: p.tech.join(", "),
            },
          })),
        },
      ],
    });
    document.head.appendChild(ld);
    created.push(ld);

    return () => {
      created.forEach((el) => el.parentNode?.removeChild(el));
    };
  }, []);

  return null;
};

export default SEO;
