const {request, spec} = require('pactum')
const {faker} = require('@faker-js/faker')

const baseURL ='https://practice.expandtesting.com/notes/api';
const name = faker.person.fullName();
let email = faker.internet.email();
let password = faker.internet.password();

const reqBody ={
    "name": name,
    "email":email,
    "password": password
};

describe('Register user scenarios test suite', () => {

    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('Register user successfully test', async() => {
        await spec()
        .post(baseURL + '/users/register')
        .withBody(reqBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(201)
        
    });

    it('Register user unsuccessfull due to already existing user.', async() => {
        await spec()
        .post(baseURL + '/users/register')
        .withBody(reqBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(409);
        
    });

    it('Register user unsuccessfull due to lack of data input.', async() => {
        await spec()
        .post(baseURL + '/users/register')
        .withBody({
            "name": name,
            "email":email})
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(400);
        
    });

    it('Register user unsuccessfull due to not complaing to the min. lenght of the password (password > 6 characters).', async() => {
        email = faker.internet.email();
        password = faker.internet.password({ length: 5});
        await spec()
        .post(baseURL + '/users/register')
        .withBody({
            "name": name,
            "email":email,
            "password": password
        })
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(400);
    });

    it('Register user unsuccessfull due to not complaing to the max. lenght of the password (password < 30 characters).', async() => {
        email = faker.internet.email();
        password = faker.internet.password({ length: 31})
        await spec()
        .post(baseURL + '/users/register')
        .withBody({
            "name": name,
            "email":email,
            "password": password
        })
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(400);
    });
});

