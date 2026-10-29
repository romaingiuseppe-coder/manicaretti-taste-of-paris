"""Fail deployment if static HTML refers to missing or root-only local assets."""
import sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path(sys.argv[1])
base = sys.argv[2]

class CheckPage(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("src", "href"):
            value = attrs.get(key, "")
            if not value or value.startswith(("#", "https:", "http:", "tel:", "mailto:", "data:")):
                continue
            path = unquote(urlsplit(value).path)
            if path.startswith("/"):
                assert path.startswith(base), f"Asset/link escapes repository base: {value}"
                path = path[len(base):]
            target = root / path
            assert target.exists(), f"Missing exported asset/link: {value}"
            if target.is_dir():
                assert (target / "index.html").exists(), f"Missing static page: {value}"

html = (root / "index.html").read_text()
assert "Manicaretti" in html, "Home page was not prerendered"
assert "/__l5e/assets-v1/" not in html, "Images still depend on the Lovable proxy"
assert (root / "404.html").read_text() == html, "Missing 404 fallback"
CheckPage().feed(html)
print("Verified static page, local images, scripts, styles, links and 404 fallback.")