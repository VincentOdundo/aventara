<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Sitemap | Cima Brava Adventures</title>
        <style>
          :root {
            --bg: #FDF6E3;
            --ink: #0A0906;
            --brown: #2A1500;
            --accent: #C2410C;
            --gold: #F59E0B;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: var(--bg);
            color: var(--ink);
            line-height: 1.5;
          }
          header {
            background: linear-gradient(120deg, #0A0906 0%, #2A1500 100%);
            color: #FDF6E3;
            padding: 2.5rem 1.5rem;
            border-bottom: 3px solid var(--gold);
          }
          .wrap { max-width: 1080px; margin: 0 auto; }
          h1 { margin: 0 0 0.5rem; font-size: 1.85rem; letter-spacing: -0.02em; color: #FFD34D; }
          .sub { margin: 0; color: rgba(253, 246, 227, 0.85); font-size: 0.95rem; }
          .pills { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.25rem; }
          .pill {
            display: inline-block;
            padding: 0.4rem 0.85rem;
            border-radius: 999px;
            border: 1px solid rgba(245, 158, 11, 0.45);
            color: #FFD34D;
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 600;
          }
          .pill:hover { background: rgba(245, 158, 11, 0.15); }
          main { padding: 2rem 1.5rem 3.5rem; }
          .summary {
            margin-bottom: 1.25rem;
            font-size: 0.92rem;
            color: var(--brown);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #FFFDF7;
            border: 1px solid rgba(42, 21, 0, 0.14);
            border-radius: 12px;
            overflow: hidden;
          }
          th, td {
            padding: 0.75rem 1rem;
            text-align: left;
            border-bottom: 1px solid rgba(42, 21, 0, 0.08);
            font-size: 0.88rem;
          }
          th {
            background: #2A1500;
            color: #FFD34D;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          tr:hover td { background: rgba(245, 158, 11, 0.08); }
          td a { color: var(--accent); font-weight: 600; text-decoration: none; word-break: break-word; }
          td a:hover { text-decoration: underline; }
          .num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
          .badge {
            display: inline-block;
            padding: 0.15rem 0.55rem;
            border-radius: 999px;
            background: rgba(245, 158, 11, 0.18);
            color: var(--brown);
            font-weight: 700;
            font-size: 0.78rem;
          }
        </style>
      </head>
      <body>
        <header>
          <div class="wrap">
            <h1>Cima Brava Adventures — XML Sitemap</h1>
            <p class="sub">
              Search engine index for Kenya &amp; Tanzania safaris, destination guides and rate cards.
            </p>
            <div class="pills">
              <a class="pill" href="/">Home</a>
              <a class="pill" href="/sitemap">HTML Sitemap</a>
              <a class="pill" href="/sitemap.md">Markdown Map (sitemap.md)</a>
              <a class="pill" href="/llms.txt">LLM Guide (llms.txt)</a>
              <a class="pill" href="/llms-full.txt">Full LLM Corpus (llms-full.txt)</a>
            </div>
          </div>
        </header>
        <main>
          <div class="wrap">
            <p class="summary">
              This XML sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong> canonical URLs.
            </p>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="num">Images</th>
                  <th class="num">Priority</th>
                  <th class="num">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                    <td class="num">
                      <xsl:value-of select="count(image:image)" />
                    </td>
                    <td class="num">
                      <span class="badge">
                        <xsl:value-of select="sitemap:priority" />
                      </span>
                    </td>
                    <td class="num">
                      <xsl:value-of select="sitemap:lastmod" />
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
