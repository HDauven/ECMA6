= Learning ECMA6

This repository is a basic setup for an ECMA6 project, that transpiles to ECMA5.

== Tools used
- Node
- Git
- Gulp (npm install -g gulp)
- ESLint (npm install -g eslint)
- Babel

== Steps to take
- Create a Git repository via 'git init'.
- Create a Node package manage file via 'npm init'.
- Create a gulp file (gulpfile.js) to setup a tasking pipeline.
- Include the Gulp and Babel local packages 'npm install --save-dev gulp gulp-babel babel-preset-es2015'.
- Create a Babel configuration file (.babelrc) and give it the name of the preset to use. ({ "presets": ["es2015"] })
- Create an ESLint file (.eslintrc) to force certain style rules onto the written code via 'eslint --init'.
- Create a node source directory (es6)
- Create a public browser source directory (public/es6)
- Create dist directories for the node and public directories.
