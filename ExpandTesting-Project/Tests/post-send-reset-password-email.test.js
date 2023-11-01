const {request, spec} = require('pactum')
const baseURL ='https://practice.expandtesting.com/notes/api';

const reqEmail={
    "email":"robert_beraru@yahoo.com"
};

describe('Send password reset email test suite', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('Password reset test', async() => {
        await spec()
        .post(baseURL+'/users/forgot-password')
        .withBody(reqEmail)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
    });    

    it('Password reset fail due to lack of email test. ', async() => {
        await spec()
        .post(baseURL+'/users/forgot-password')
        .withBody("")
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(400)
    });
});
