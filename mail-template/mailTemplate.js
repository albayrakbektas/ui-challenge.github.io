const fs = require("fs");

// read template.eml file
let mail = fs.readFileSync(
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/mail-template/template.eml",
  { encoding: "utf-8" }
);

// assets
const imagesPaths = [
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/public/assets/carterBlack.jpg",
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/public/assets/mail-template.png",
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/public/assets/mail-template.png",
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/public/assets/mail-template.png",
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/public/assets/mail-template.png",
];

// replace new data to $PHOTO in template.eml file
for (let i = 0; i < imagesPaths.length; i++) {
  mail = mail.replace(
    `$PHOTO${i + 1}`,
    fs.readFileSync(imagesPaths[i], { encoding: "base64" })
  );
}

const processedMail = mail.split("\n").join("\r\n");

// create or override to email-template.eml
fs.writeFileSync(
  "/Users/bektasalbayrak/WebstormProjects/ui-challenge/mail-template/email-template.eml",
  processedMail,
  { encoding: "utf-8" }
);
