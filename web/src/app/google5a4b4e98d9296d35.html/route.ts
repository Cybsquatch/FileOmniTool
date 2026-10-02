export function GET() {
  return new Response("google-site-verification: google5a4b4e98d9296d35.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
