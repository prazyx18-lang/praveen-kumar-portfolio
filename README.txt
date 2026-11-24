PRAVEEN KUMAR — PORTFOLIO WEBSITE
=================================

This is a static website (HTML, CSS and a little JavaScript). It needs no
installation, no database, no server and no build step.

--------------------------------------------------------------------
1. WHAT IS IN THIS FOLDER
--------------------------------------------------------------------

  index.html               Home page (all sections, project enquiry form)
  terms.html               Terms & Conditions page
  privacy.html             Privacy Policy page
  assets/css/styles.css    Design, colours, layout and animations
  assets/js/main.js        Mobile menu, scroll animations, footer year
  assets/js/enquiry.js     Project enquiry form (opens a prefilled WhatsApp message)
  assets/img/favicon.svg   Small "PK" icon shown in the browser tab
  assets/img/og-image.png  Image shown when the site is shared on social media
  assets/img/projects/     Put the project screenshots here (see section 4)
  robots.txt               Tells search engines they may index the site
  README.txt               This file

--------------------------------------------------------------------
2. HOW TO VIEW IT ON YOUR COMPUTER
--------------------------------------------------------------------

  Option A (simplest): double-click index.html. It opens in your browser.

  Option B (recommended, closer to the live site): use VS Code's
  "Live Server" extension, right-click index.html and choose
  "Open with Live Server".

  Check it on a phone too: open your browser's developer tools (F12),
  turn on the device toolbar and pick a phone size.

--------------------------------------------------------------------
3. HOW TO CHANGE THE CONTENT
--------------------------------------------------------------------

  All text is in the HTML files. Search for the words you want to change.

  - Hero headline, introduction and availability statement: top of index.html.
  - About me and education:     the "About me" section of index.html.
  - Skills:                     the "Technical skills" section. Only list skills
                                you can honestly demonstrate.
  - Projects:                   the "Featured projects" section. Keep only real,
                                working links.
  - Services:                   the "Services" section.
  - Contact details:            the "Contact me" section and the footer
                                (WhatsApp +91 87780 36215, email prazyx18@gmail.com).
  - Terms & Conditions:         terms.html (keep the closing note).
  - Privacy Policy:             privacy.html. Check that it matches how you
                                handle enquiries before you publish.
  - Colours:                    the :root block at the top of assets/css/styles.css.

  Pricing: the site shows only the pricing policy statement. Do not add
  rates, prices or price ranges.

--------------------------------------------------------------------
4. ADDING PROJECT SCREENSHOTS
--------------------------------------------------------------------

  Each project card shows a dashed "Screenshot placeholder" box until a real
  screenshot exists. To replace it, save a screenshot of each live website
  with exactly these file names:

    assets/img/projects/urbancart.jpg        (UrbanCart)
    assets/img/projects/canteenapp.jpg       (CanteenApp)
    assets/img/projects/maison-elera.jpg     (MAISON ÉLÉRA)

  Use a landscape image of about 1600 x 1000 pixels, JPG format, under 300 KB.
  Take the screenshots from the live websites yourself. Do not use stock photos
  as project screenshots.

  The placeholders are not linked to any file, so they will not show a
  missing-file error. To show a screenshot, open index.html, find the project
  card, and add this line inside its <figure class="project-shot"> element,
  directly after the closing </div> of the "shot-placeholder" box:

    <img src="assets/img/projects/urbancart.jpg" alt="UrbanCart e-commerce website screenshot" width="1600" height="1000" loading="lazy">

  Change the file name and the alt text for each project. The image covers the
  placeholder automatically.

--------------------------------------------------------------------
5. HOW THE PROJECT ENQUIRY FORM WORKS
--------------------------------------------------------------------

  The form checks the fields (name, email, project type, description). When
  everything is valid, it opens WhatsApp with the enquiry already written.
  The visitor must press Send in WhatsApp. The website does not store or send
  the enquiry itself, and the page never says the message was delivered.

  If the browser blocks the new window, the page shows a direct WhatsApp link.
  The "Or send by email" button opens the visitor's email app.

  To test it: fill in every field, press the button, and check that WhatsApp
  opens with the message. Then send it to yourself to confirm it arrives.

--------------------------------------------------------------------
6. ITEMS THAT NEED YOUR INPUT BEFORE PUBLISHING
--------------------------------------------------------------------

  - Canonical and social links: replace YOUR-PORTFOLIO-DOMAIN with your real
    domain in index.html, terms.html and privacy.html (search for
    "YOUR-PORTFOLIO-DOMAIN"). Until then, these links point nowhere.
  - Portfolio domain: replace YOUR-PORTFOLIO-DOMAIN after you deploy and
    receive your final public website address.
  - GitHub profile: https://github.com/prazyx18-lang is linked from the hero,
    contact section and footers. Individual project repository links have not
    been added because the public repositories for those projects have not
    been confirmed.
  - CanteenApp and MAISON ÉLÉRA: confirm the actual technologies used before
    replacing the "To be confirmed" notes in their project cards.
  - Project screenshots: add genuine screenshots using the filenames in
    section 4. These have not been fabricated or substituted with stock images.
  - Check every skill, feature and education detail is true.
  - Confirm the availability statement and the Terms & Conditions wording
    (sections 4, 8, 9 and 13 in particular) match how you work.

--------------------------------------------------------------------
7. HOW TO PUT IT ONLINE (FREE OPTIONS)
--------------------------------------------------------------------

  Option A: Netlify Drop (no account coding needed)
    1. Go to https://app.netlify.com/drop
    2. Drag this whole folder onto the page.
    3. Netlify gives you a public address. You can rename it in settings.

  Option B: GitHub Pages
    1. Create a new GitHub repository and upload these files to it.
    2. In the repository: Settings > Pages > "Deploy from a branch" > main > / (root).
    3. Your site appears at https://YOUR-USERNAME.github.io/REPOSITORY-NAME/

  Option C: Vercel
    1. Go to https://vercel.com/new and import the repository, or drag the
       folder in with the Vercel CLI.
    2. Framework preset: "Other". No build command. Output directory: leave empty.

  After you publish:
    - Replace YOUR-PORTFOLIO-DOMAIN in the files (section 6) with the real
      address, then publish again.
    - Open the address on a phone and on a computer, and click every link once:
      navigation, all three "Visit Live Website" buttons, the WhatsApp links, the
      email links, the enquiry form, Terms & Conditions and Privacy Policy.

--------------------------------------------------------------------
8. BEFORE YOU SHARE THE SITE
--------------------------------------------------------------------

  - Re-read every project description, skill and service, and confirm each one
    is true.
  - Add genuine project screenshots (section 4) and confirm the remaining
    project stack details (section 6).
  - Optional: add a sitemap and its address to robots.txt.
