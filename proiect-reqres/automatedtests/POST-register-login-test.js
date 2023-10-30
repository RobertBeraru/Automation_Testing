const {spec, request} = require ('pactum');
const baseURL = "https://reqres.in/";

const userCredRegister ={
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const userCredLogIn ={
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

describe('POST Register and login user test', () => {
    before(() => {
        request.Timeout=10000;
    });
    it('POST Register user test',async () => {
        await spec()
        .post(baseURL+'api/register')
        .withBody (userCredRegister)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
    });
    after(() => {
        console.log(`The user has been successfully registered.`)
    });
    it('POST Login user test',async () => {
        await spec()
        .post(baseURL+'api/login')
        .withBody(userCredLogIn)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        
    });
    after(() =>{
        console.log(`The user has successfully logged in.`)
    })
});