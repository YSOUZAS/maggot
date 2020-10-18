#! /usr/bin/env node
var fs = require("fs");

fs.writeFileSync(
  ".firebaserc",
  `{
  "projects": {
    "default": '${process.env.FIREBASE_PROJECT_ID}'
  },
  "targets": {
    '${process.env.FIREBASE_PROJECT_ID}': {
      "hosting": {
        "maggot": [
          '${process.env.FIREBASE_PROJECT_ID}'
        ]
      }
    }
  }
}`,
  function (err) {
    if (err) throw err;
  },
);
