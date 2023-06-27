# init layout project 
--by aki

## Tailwindcss

1. Key `npx tailwindcss init` in Terminal
2. Ensure "tailwind.config.js":

```js
content:['./components/**/*.{html,js}',
   './pages/**/*.{html,js}',
   './index.html',]
```

3. Ensure vscode extention: "Tailwind CSS IntelliSense" has been installed
4. Edit "settings.json" :

```JSON
"tailwindCSS.includeLanguages": {
        "html": "HTML",
        "javascript": "javascript"
    },
```

** USE CDN **

```HTM
<script src="https://cdn.tailwindcss.com"></script>
```

## jQuery

1. Ensure vscode extention: "jQuery Code Snippets" has been installed

** USE CDN **

```HTML
  <script
    src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
    crossorigin="anonymous"
  ></script>
```
