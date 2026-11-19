# Liberty Geotechnics Ltd Website

A responsive static website starter using a green, brown and cream visual identity.

## Included
- Home, Services, About Us, Contact Us, Privacy Policy, Terms of Service, Site Map, Blog/News and 404 pages
- Dedicated service detail pages for every supplied service
- Admin login, dashboard, Manage Images, Manage Services, Manage Blog and Account Settings
- Cookie consent banner
- `robots.txt` and `sitemap.xml`
- Custom vector logo at `assets/logo.svg`

## Run locally
Because links use root-relative paths, run a local static server from this folder:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000

You can also deploy the folder to any static hosting provider that supports static HTML.

## Demo admin credentials
- Username: `admin`
- Password: `Liberty@2026`

Change the password in Admin → Account Settings. **Important:** the included admin area is a front-end demo only. Login state and content drafts use browser storage and are not secure server-side authentication. The demo password is not suitable for a production deployment.

## Before going live
1. Replace `https://www.example.com` in `robots.txt` and `sitemap.xml` with the real website domain.
2. Confirm the business address, phone number, email, service descriptions and project references.
3. Add real, approved project photographs and company social links.
4. Have the privacy policy and terms reviewed against the company’s actual data practices and applicable Kenyan requirements.
5. For production administration, add a backend, secure authentication, database, role-based permissions, protected image uploads, backups and server-side validation. Do not expose the admin area as a public content management system in its current demo form.
6. Configure hosting-level 404 routing to `404.html` and enable HTTPS.

## Contact details included
Liberty Geotechnics Ltd  
CEB, Harry Thuku Rd, Nairobi  
0780728149  
libertygeotechnicsltd@gmail.com

## Project structure
- `index.html` — Home
- `services.html` — Services index
- `services/` — One page per service
- `about.html`, `contact.html`, `blog.html`
- `privacy-policy.html`, `terms-of-service.html`
- `sitemap.html`, `sitemap.xml`, `robots.txt`, `404.html`
- `admin/` — Login and dashboard management pages
- `assets/` — Logo, illustration, CSS and JavaScript
\n\n## Company photographs added\nThe assets/images directory contains the supplied field and construction photographs. They are used in the homepage hero, work gallery, About page and Services page.\n