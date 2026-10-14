export function GET() {
  const xml = `<?xml version="1.0"?>
<users>
\t<user>767372D3B80CE4ED1441F700CDB39759</user>
</users>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
