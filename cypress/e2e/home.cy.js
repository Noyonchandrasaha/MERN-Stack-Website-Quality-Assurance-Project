describe('TS_ALF_001', () => {
    const testCases = [
        {
            name:'TC_ALF_001',
            email: 'noyon@example.com',
            pass: 'admin',
            rememberMe: false
        },
        {
            name:'TC_ALF_002',
            email: 'admin1@example.com',
            pass: 'admin',
            rememberMe: false
        },
        {
            name:'TC_ALF_003',
            email: 'admin5@example.com',
            pass: 'admin',
            rememberMe: false
        }
    ]

    testCases.forEach(({name,email,pass, rememberMe}) => {
        it(name, ()=>{
            cy.adminLogIn(email,pass,rememberMe)
            cy.contains("Welcome to the Admin Dashboard.")
        })
    })
})