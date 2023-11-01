const {spec, request} = require ('pactum')

describe('GET single user not found test', () => {
    
    const baseURL="https://reqres.in/"

    it('GET single user not found test',async () => {

        await spec()
        .get(baseURL+'api/users/23')
        .expectStatus(404)

    });
    
});