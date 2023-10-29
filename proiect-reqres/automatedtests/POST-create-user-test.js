const {spec} = require('pactum')
const { faker } = require('@faker-js/faker');

describe('POST create user test', () => {
    
    const baseURL="https://reqres.in/"
    let name= faker.person.fullName()
    let jobName = faker.person.jobTitle()

    const bodyReq = {
        "name": name,
        "job": jobName
    }
    

    it('POST create user test', async() => {
        await spec()

        .post(baseURL+'api/users')
        .withHeaders('Content-Type', 'application/json')
        .withBody()
        
        // .inspect()
        .expectStatus(201)
        
    });
    
    after(() => {
        console.log(`This is the random name ${name} and this is the random job ${jobName}.`)
        
    });
    
});