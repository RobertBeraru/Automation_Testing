const {request, spec} = require('pactum')
const baseURL ='https://practice.expandtesting.com/notes/api';

const reqLoginData={
    "email": "beraru13@gmail.com",
    "password": "testingpurpose"
    };

const authToken = "48ee6829af1d4448a2abb7540375ed4cf211a3ad289548108482a8742b0dbec7"

describe('Log out the currently authenticated user test suite.', () => {

    before(async() => {
        request.setDefaultTimeout(10000);
        it('Login user with valid credentials. ', async() => {
            await spec()
            .post(baseURL+'/users/login')
            .withHeaders('Content-Type', 'application/json')
            .withBody(reqLoginData)
            .expectStatus(200);
        });
    });
    
    it('Log out the currently authenticated user test.', async() => {
        await spec()
        .delete(baseURL+'/users/logout')
        .withHeaders("x-auth-token","48ee6829af1d4448a2abb7540375ed4cf211a3ad289548108482a8742b0dbec7")
        .expectStatus(401);
    
    });
});