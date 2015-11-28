# Introduce

Make sure you have Install `nodejs` and `bower` Installed in global

## How To Use

Execute command `npm install & bower install` <br>

Please use Command `gulp bower` and see index.html.you would find js file was auto write.

## Querstion

If you install bootstrap, but css con't install auto,please add such below to you gulpfile.js
```
"overrides": {
    // bootstrap
    "bootstrap": {
      "main": [
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
```



