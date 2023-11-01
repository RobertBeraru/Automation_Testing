const{spec}= require ('pactum')
const {faker, base} = require ('@faker-js/faker')

describe('PUT update user info test', () => {
    
    const baseURL= 'https://reqres.in/'
    let name= faker.person.fullName()
    let jobName = faker.person.jobTitle()
    let userID = faker.number.int({ max: 20 })
    

    let newBodyUpdated = {
        "name": name,
        "job": jobName
    }

    it('PUT update user info test',async () => {
        
        await spec()

        .put(baseURL+'api/users/'+userID)
        .withHeaders('Content-Type', 'application/json')
        .withBody(newBodyUpdated)
        .expectStatus(200)
        
    });
    after(() => {
        console.log(`The user with the id ${userID} had its name updated to ${name} and its job to ${jobName}.`)
    });
    
});