const { request, spec } = require("pactum");
const baseURL = "https://practice.expandtesting.com/notes/api";

const reqLoginData = {
  email: "beraru13@gmail.com",
  password: "testingpurpose",
};

describe("Obtain the users login token test suite", () => {
  let authToken = "";

  before(async () => {
    request.setDefaultTimeout(10000);

    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqLoginData)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
    authToken = response.body.data.token;
  });

  it("Login user with valid credentials and with the assigned authentication token. ", async () => {
    await spec()
      .post(baseURL + "/users/login")
      .withHeaders("x-auth-token", authToken)
      .withBody(reqLoginData)
      .expectStatus(200);
  });

  after(() => {
    console.log(
      `The authentication token for the inputed user is ${authToken}`
    );
  });
});
