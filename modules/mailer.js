// Require:
var postmark = require("postmark");

module.exports = {
  sendEmail: function (htmlContent, textContent, targetEmail, apiKey) {
    var client = new postmark.ServerClient(apiKey);
    client.sendEmail({
      "From": targetEmail,
      "To": targetEmail,
      "Subject": "Parking registration report",
      "HtmlBody": htmlContent,
      "TextBody": textContent,
      "MessageStream": "broadcast"
    });
  }
}
