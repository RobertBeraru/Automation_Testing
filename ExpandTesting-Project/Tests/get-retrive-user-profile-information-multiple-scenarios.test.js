const{request, spec} = require('pactum');
const baseURL = 'https://practice.expandtesting.com/notes/api';

const logInData ={
    "email": "beraru13@gmail.com",
    "password":"testingpurpose"
};

describe('Retrive user profile information multiple scenarios test suite', () => {
    let authToken ="";
    let firstTest ="";
    
    before(async() => {
        request.setDefaultTimeout(10000);

        const response = await spec()
        .post(baseURL+'/users/login')
        .withBody(logInData)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200);

        authToken = response.body.data.token;
    });

    it('Retrive user profile with token authentication test.', async() => {
        
        await spec()
        .get(baseURL+'/users/profile')
        .withHeaders("x-auth-token", authToken)
        .withBody(logInData)
        .expectStatus(200)
        
        if (firstTest){
            console.log(`The user profile have been successfuly retrive using the assigned token("${authToken}").`)
            firstTest = false;
        }
    });

    it('Retrive user profile without authentication token test.', async() => {
        await spec()
        .get(baseURL+'/users/profile')
        .withHeaders('Content-Type', 'application/json')
        .withBody(logInData)
        .expectStatus(401);
    });
    
    it('Retrive user profile with wrong authentication token test.', async() => {
        await spec()
        .get(baseURL+'/users/profile')
        .withHeaders("x-auth-token", authToken+"wrong")
        .withBody(logInData)
        .expectStatus(401);
    });
});