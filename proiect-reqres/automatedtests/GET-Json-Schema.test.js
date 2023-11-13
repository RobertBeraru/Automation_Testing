const { spec, request } = require("pactum");
const baseURL = "https://reqres.in/";
const getAllUsersSchema = require("../response/get-schema-json.json");
describe("GET JSon schema test", async () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });
  it("Get JSon Schema and compare it", async () => {
    await spec()
      .get(baseURL + "api/users?page=2")
      .expectStatus(200)
      .expectJsonSchema(getAllUsersSchema);
  });
});
