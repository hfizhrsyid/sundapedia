// setAdminClaim.cjs
const admin = require("firebase-admin");
const serviceAccount = require("./sp-dev-e0bd5-firebase-adminsdk-bekoi-334065bb49.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = "USER_ID";

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("Custom claim set! User is now admin.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error setting custom claim:", error);
    process.exit(1);
  });