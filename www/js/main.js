function sendEmail() {
  let senderEmail = document.getElementById("email").value;
  let senderSubject = document.getElementById("subject").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tommy@hldesign.se",
    Password: "E7D1E7513BB0880E1C4F22F9ED00757B7724",
    To: "tommynguyen@live.se",
    From: senderEmail,
    Subject: senderSubject,
    Body: "FÖR HEELLEEVEE",
  }).then((message) => alert(message));
}
