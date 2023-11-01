const {request, spec} = require('pactum');
const {faker} = require ('@faker-js/faker');

const baseURL ='https://practice.expandtesting.com/notes/api';
const company = faker.company.name();
const phoneNumber = faker.number.int({ length: 19 })

const reqLoginData={
    "email": "beraru13@gmail.com",
    "password": "testingpurpose"
};

const updatedParameters ={
    "name": "BeraruRobert",
    "phone": `${phoneNumber}`,
    "company": company
};
describe('Update the user profile information for the logged-in user test suite.', () => {
        let authToken ="";
        let firstTest ="";
        
        before(async() => {
            request.setDefaultTimeout(10000);
    
            const response = await spec()
            .post(baseURL+'/users/login')
            .withBody(reqLoginData)
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200);
    
            authToken = response.body.data.token;
        });

    it('Update the user profile information for the logged-in user successfully test.', async() => {
        await spec()
        .patch(baseURL+'/users/profile')
        .withHeaders('x-auth-token', authToken)
        .withBody(updatedParameters)
        .expectStatus(200)
        
    });
    it('Update the user profile information for the logged-in user unsuccessfully test.', async() => {
        await spec()
        .patch(baseURL+'/users/profile')
        .withHeaders('x-auth-token', authToken)
        .withBody({
            "phone": `${phoneNumber}`,
            "company": company})
        .expectStatus(400)
    });
});