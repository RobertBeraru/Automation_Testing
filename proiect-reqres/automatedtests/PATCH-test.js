const { spec } = require("pactum");
const {faker} = require('@faker-js/faker')

describe('PATCH test', () => {

    const baseURL = 'https://reqres.in/'
    let name = faker.person.fullName();
    let job = faker.person.jobTitle();

    let updatedBody = {
        "name": name,
        "job": job
    }


    it('PATCH test', async() => {
        await spec()
        .get(baseURL+'api/users/2')
        .withBody(updatedBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        
    });
    after(() => {
        console.log(`The new patched body has name:${name} and job:${job}. `)
    });
    
});