const { request, spec } = require("pactum");
const baseURL = "https://practice.expandtesting.com/notes/api";
const baseEmailURL =
  "https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/d674cb82dca58d8f936fa8be066bbec4/";

const emailHeaders = {
  "X-RapidAPI-Key": "d1b298bac0msh98e47ad40132012p16da37jsnb8162c8da4ec",
  "X-RapidAPI-Host": "privatix-temp-mail-v1.p.rapidapi.com",
};

const reqEmail = {
  email: "testing@nuclene.com",
};

describe("Sending and verifiying the provided reset token from email test suite.", () => {
  let substractedToken = "";
  before(async() => {
    request.setDefaultTimeout(10000);
    await spec()
      .post(baseURL + "/users/forgot-password")
      .withBody(reqEmail)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Sending password reset email test.", async () => {
    await spec()
      .post(baseURL + "/users/forgot-password")
      .withBody(reqEmail)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Obtaining the reset token from accessing an email inbox and verifying if the token sent is good test.", async () => {
    const response = await spec()
      .get(baseEmailURL)
      .withHeaders(emailHeaders)
      .expectStatus(200);
    if (response.body.length > 0) {
      const mailTextOnly = response.body[0].mail_text_only;
      let substractedToken = mailTextOnly.substring(222);

      console.log(
        `This is the substracted token sent in the reset password email: ${substractedToken}.`
      );
      return substractedToken;
    } else {
      console.log("No emails found in the API response.");
    }

    await spec()
      .post(baseURL + "/users/verify-reset-password-token")
      .withBody(substractedToken)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });

  it("Unsuccessfuly verifying the reset password token test. ", async () => {
    await spec()
      .post(baseURL + "/users/verify-reset-password-token")
      .withBody("")
      .withHeaders("Content-Type", "application/json")
      .expectStatus(401);
  });
});
