#

# 1) Install git and nodejs

#

- 1. - Create a new repository called portfolio on your GitHub account.

- 2. - In a local folder of your choice, run this command: git clone -b main https://github.com/AlexandreScht/portfolio.git

- 3. - go into the new folder and run this command: npm run i

- 4. - Remove the old Git history with this command: rm -rf .git

- 5. - Re-initialize Git: git init

- 6. - Link your local folder to your new GitHub repo: git remote add origin <URL_DU_DEPOT>
       ( Replace <URL_DU_DEPOT> with the URL of the GitHub repository you created. For example: git remote add origin https://github.com/AlexandreScht/portfolio.git )

- 7. - In the project root, create a file named [.env] (you’ll fill this in later in step #3.4 below).

- 8. - start the project with the command: npm run dev

#

# 2) Configure the code

#

- 1. - In the [src/config] folder, you’ll find files where you can add your name, experiences, projects, and more.
     * Keep the same file names and structure so the code can read your data correctly.
     * For the Job and About Me sections, use the same logic to naming your key than you will have bellow in step #2.2 to name your cv or you can put a "default" key with your text

- 2. - In the folder [public/pdf] you have to delete all the pdf file and replace by your pdf in the correct folder. Then rename your folder who contain your pdf like this rule:

* If you only need one PDF for your site:
  Name your folder default and put your pdf inside
  Use this address for your site: <username>.vercel.app/portfolio

* If you want a different PDF depending on the address:

- Take the first part of your site’s address (before the first “-”).
- Name each PDF folder's have to match that first part.

For example:
Site addresses:

1. dev-<username>.vercel.app/portfolio
2. sec-<username>.vercel.app/portfolio

PDF files:

1. [public/pdf/dev] and then put you pdf file inside the folder [dev]
2. [public/pdf/sec] and then put you pdf file inside the folder [sec]

You need to respect this way:
URL: <pdf-name>-<username>.vercel.app/portfolio
PDF: <pdf-name>/your_pdf_file

- 3. - In the [public/template] folder, there is an [contact.html] file that defines the email you’ll receive when someone contacts you. You can customize this template, but you must use these placeholders:

* {{name}} will insert the sender’s name (e.g., “{{name}} contacted you!”)
* {{body}} will insert the sender’s message
* {{email}} will insert the sender’s email address

- 4. - In the [public] folder, replace [avatar.jpg] with your own picture
     * Make sure to keep the .jpg extension when you swap the file.

- 5. - In the [src/styles] folder, open [colors.css] to change the site’s colors:

* @theme defines the light-mode colors
* .dark defines the dark-mode colors
* :root controls the carousel pagination styles (it’s best to leave these as they are)

#

# 3) Brevo smtp account ( email )

#

- 1. - Go to the Brevo website: https://www.brevo.com/fr/

- 2. - Sign up and create a free account.

- 3. - Click the profile icon in the top-right corner, then choose SMTP & API from the menu.

- 4. - Open your [.env] file (created in step #1.7) and add these lines, replacing each placeholder with the values you find on your Brevo SMTP page:
       EMAIL_HOST = <SMTP_SERVER FIND IT ON THE WEBSITE BREVO PAGE>
       EMAIL_PORT = <SMTP_PORT FIND IT ON THE WEBSITE BREVO PAGE>
       EMAIL_USER = <ID FIND IT ON THE WEBSITE BREVO PAGE>
       EMAIL_PASSWORD = <PASSWORD OF THE SMTP KEY VALUE ON THE WEBSITE BREVO PAGE>
       EMAIL_ADDRESS = <your_own_email_address>

- 5. - Save the [.env] file.

#

# 4) Deploy it !

#

- 1. - Go to Vercel: https://vercel.com

- 2. - Sign up or log in with your GitHub account.

- 3. - Click “New Project”, then click on GitHub App Permissions select your portfolio repo and save.

- 4. - Import your portfolio repo into Vercel:

* On the import screen, click your repo name to open it on GitHub.
* In the GitHub repo settings, change the Default branch to main, then return to Vercel.
* In Vercel’s Environment Variables section, copy each line from your local [.env] file into Vercel one by one.
* Click Deploy.

- 5. - Add a custom domain:

following the rules of the step #2.2 to rename correctly the domain of your portfolio url:

- If you only need one PDF on your site, add:
  <username>.vercel.app

* (Use only letters for <username>, no symbols.)

- If you want different PDFs based on the URL, add a domain for each PDF:
  for all pdf added, add a new domain with the name of the first part of your pdf (before the first “-”) following by .vercel.app

* example

- for the pdf named: dev-cv.pdf
- create a domain: dev-<username>.vercel.app

- for the pdf named: res-cv.pdf
- create a domain: res-<username>.vercel.app

* (Use only letters for <username>, no symbols.)

- 6. - Remove the default Vercel domain that was created automatically.

# finally

- 1. - Open your custom domain in a web browser (for example, https://<username>.vercel.app).

- 2. - At the end of the URL, add /portfolio (for example, https://<username>.vercel.app/portfolio).

- 3. - Press Enter to view your live website.
