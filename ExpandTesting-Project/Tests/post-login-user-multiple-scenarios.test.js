const {request, spec} = require('pactum')
const baseURL ='https://practice.expandtesting.com/notes/api';

const reqLoginData={
    "email": "beraru13@gmail.com",
    "password": "testingpurpose"
    };

const reqInvalidLoginData={
    "email": "nonexistingemail@gmail.com",
    "password": "nonexistingpass"
    };

describe('Login user test suite', () => {

    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('Login user with valid credentials. ', async() => {
        await spec()
        .post(baseURL+'/users/login')
        .withHeaders('Content-Type', 'application/json')
        .withBody(reqLoginData)
        .expectStatus(200);

    });

    it('Login user with invalid credentilas.', async() => {
        await spec()
        .post(baseURL+'/users/login')
        .withHeaders('Content-Type', 'application/json')
        .withBody(reqInvalidLoginData)
        .expectStatus(401);
    });
    
});
