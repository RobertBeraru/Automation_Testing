const {spec, request}= require ('pactum');
const {faker} = require ('@faker-js/faker');

describe('POST register UNSUCCESSFUL', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    const baseURL= "https://reqres.in/";
    
    // let newRegisterForm ={
    //     "email": email
    // }

    const newRegisterForm ={
        "email": "sydney@fife"
    };

    it('POST register UNSUCCESSFUL', async() => {

        await spec()
        .post(baseURL+'api/register')
        .withBody(newRegisterForm)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(400)
        // .inspect()
        
    });

    after(() => {
        console.log(`The new user has the email:_____ and this test will fail on purpose due to the lack of the password.`)
    });
});