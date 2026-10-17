export function GET() {
  return new Response("50abff68058d4d59bec68c1fdfabbfcf", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
