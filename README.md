
  # Shutters Film Website

  This is a code bundle for Shutters Film Website. The original project is available at https://www.figma.com/design/u6CkoEdGJ9BGuFShr23xeI/Shutters-Film-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to GitHub Pages

  This app builds as a static Vite site and can be deployed directly with GitHub Pages.

  1. Push the repository to GitHub.
  2. In GitHub, open **Settings > Pages**.
  3. Set **Build and deployment > Source** to **GitHub Actions**.
  4. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually.

  If you prefer GitHub's **Deploy from a branch** setting instead, set the folder
  to `/docs` on `main`. The `npm run build` command writes the production site
  there, including `CNAME` and `.nojekyll`.

  The build uses relative asset paths, so it works both on a project Pages URL like
  `https://USERNAME.github.io/REPOSITORY/` and on the custom domain in `CNAME`.
  
