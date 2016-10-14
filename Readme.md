# Github User LookUp

#### Week1: Modern JS Apps - Independent project using API

#### By *Vichitra Pool (Note), October 14th, 2016*

## Description

#### _Create a website where users may enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. Use the GitHub API to retrieve this information._

## Behavior Driven Development
|Behavior | input | output|
|--- | :---: | :---: |
|Allow user to input name in uppercase letters, the output will be lowercase | ADAM | adam
|Allow user to input name in lowercase letters, the output will be lowercase| adam | adam

## Setup/Installation Requirements
1.  Open PowerShell
2.  $ git clone https://github.com/TalayRuk/Github-User-Lookup.git
3.  $ cd Github-User-Lookup
4.  $ npm install
5.  $ bower install
6.  $ npm install browser-sync --save-dev
7.  $ npm install gulp-sass gulp-sourcemaps --save-dev
8.  Create your API (Personal Access Token) in Github:
    - Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.
    - GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.
9.  $ make new .env file in your directory and type in exports.apiKey = "place your-API-here"; and save.

10. if there's error run $ gulp jshint
11. gulp cssBuild
12. $ gulp build --production
13. $ gulp serve

## Known Bugs
_none_

## Support and contact details
_Contact me at vjde28@gmail.com_

## Technologies Used

1. HTML
2. CSS
3. JavaScript
4. Node.js
5. Npm & Gulp
6. Bower & Sass
7. API


## License

_*MIT Creative Commons*_

_Copyright (c) 2016 Vichitra Pool at Epicodus_
