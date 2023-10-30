const {spec, request} = require ('pactum');
const baseURL = "https://reqres.in/";

const userCred ={
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

describe('POST Register and login user test', () => {
    before(() => {
        request.Timeout=10000;
    });
    it('POST Register user test',async () => {
        await spec()
        .post(baseURL+'api/register')
        .withBody (userCred)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
    });
    after(() => {
        console.log(`The user has been successfully registered.`)
    });
    it('POST Login user test',async () => {
        await spec()
        .post(baseURL+'api/login')
        .withBody(userCred)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        
    });
    after(() =>{
        console.log(`The user has successfully logged in.`)
    })
});