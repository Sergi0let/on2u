on2u.

Налаштування для .pretierrc
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "htmlWhitespaceSensitivity": "ignore",
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "html",
        "printWidth": 120
      }
    },
    {
      "files": ["*.css", "*.scss"],
      "options": {
        "parser": "css",
        "printWidth": 120
      }
    },
    {
      "files": ["*.js"],
      "options": {
        "parser": "babel",
        "printWidth": 120
      }
    }
  ]
}