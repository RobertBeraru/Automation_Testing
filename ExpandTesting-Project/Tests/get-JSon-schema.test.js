const { spec, request } = require("pactum");
const generatedJSonSchema = require("../data/JSon-Schema.json");
const baseURL = "https://practice.expandtesting.com/notes/api";
const reqBody = {
  email: "beraru13@gmail.com",
  password: "testingpurpose",
};
describe("Get user JSon schema test", () => {
  before(async () => {
    request.setDefaultTimeout(10000);

    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json");
    authToken = response.body.data.token;
  });

  it.only("Obtain the JSon schema and comapare it ", async () => {
    await spec()
      .get(baseURL + "/users/profile")
      .withHeaders("x-auth-token", authToken)
      .expectStatus(200)
      .expectJsonSchema(generatedJSonSchema);
  });
});
