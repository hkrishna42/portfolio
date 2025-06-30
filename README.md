This contains the code tfor my portfolio website.

## Local Development

Open `index.html` in your browser or serve locally using a simple HTTP server:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

## Deploying

You can deploy this static site easily via GitHub Pages:

1. Push the code to a GitHub repository.
2. In repository settings, enable GitHub Pages and select the `main` branch as the source.
3. Your portfolio will be live at `https://<username>.github.io/<repository>`.

## Customization

Feel free to adjust the colors, fonts, and sections in `styles.css` and `index.html` to suit your personal brand.

## New Features

* Featured Projects section – update `index.html` project cards and swap placeholder images.
* Interactive D3.js bar-chart demo in the "Demo" section (`script.js` + `#viz`).
* Social links (GitHub & LinkedIn) in the footer.
* Downloadable résumé button in Hero – replace the placeholder PDF in `assets/Harikrishnan_Girikumar_Resume.pdf` with your real résumé.
