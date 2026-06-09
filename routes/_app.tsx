import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Siqueira Prog</title>
        <link rel="icon" type="image/svg+xml" href="/img/iconnovo.svg" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/neon-red.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
              document.documentElement.setAttribute('data-theme', savedTheme);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          `
        }}></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
