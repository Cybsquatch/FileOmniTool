export function GET() {
  return new Response("fc4211383da04f53b80287af5babf11f", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
