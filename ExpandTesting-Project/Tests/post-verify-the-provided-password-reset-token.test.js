const {request, spec} = require('pactum')
const baseURL ='https://practice.expandtesting.com/notes/api';

const emailToken={
    "token":"2faf2c84d77643149c488fb3021cc16d7603e3a0fdb848b4954f89e3bb39369f"
};

describe('Verifying the provided reset token from email.', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('Password good reset token test.', async() => {
        await spec()
        .post(baseURL+'/users/verify-reset-password-token')
        .withBody(emailToken)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(401) //new token must be inserted
    });    

    it('Password bad reset token test. ', async() => {
        await spec()
        .post(baseURL+'/users/verify-reset-password-token')
        .withBody("")
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(401)
    });
});