const {spec, request}= require ('pactum');
const {faker} = require ('@faker-js/faker');

describe('POST register SUCCESSFUL', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    const baseURL= "https://reqres.in/";

    let email = faker.internet.email()
    let password = faker.internet.password()
    
    // let newRegisterForm ={
    //     "email": email,
    //     "password": password
    // }

    const newRegisterForm ={
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }

    it('POST register SUCCESSFUL', async() => {

        await spec()
        .post(baseURL+'api/register')
        .withBody(newRegisterForm)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        // .inspect()
        
    });
    after(() => {
        console.log(`The new user has the email:${email} and the password:${password}.`)
    });
});