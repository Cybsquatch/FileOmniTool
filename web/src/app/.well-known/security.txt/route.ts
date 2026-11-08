import { NextResponse } from "next/server";

export async function GET() {
  const content = `Contact: mailto:riccardo.belli00@gmail.com
Contact: https://github.com/Cybsquatch
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en, it, es, fr, de, pt
Canonical: https://www.fileomnitool.com/.well-known/security.txt
Policy: https://www.fileomnitool.com/privacy
Acknowledgments: https://www.fileomnitool.com/articles
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
