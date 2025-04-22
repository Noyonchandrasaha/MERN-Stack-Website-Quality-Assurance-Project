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

describe('TS_ALF_002', () => {
    const testCases = [
        {
            name: 'TC_ALF_004',
            email: 'noyon@example.com',
            pass: 'Admin',
            rememberMe: false
        },
        {
            name: 'TC_ALF_005',
            email: 'admin7@example.com',
            pass: 'admin',
            rememberMe: false
        },
    ]

    testCases.forEach(({name, email, pass, rememberMe}) => {
        it(name, () => {
            cy.adminLogIn(email, pass, rememberMe)
            cy.contains('Login failed: Invalid email or password.')
        })
    })

})

describe('TS_ALF_003', () => {
    const testCases = [
        {
            name: 'TC_ALF_006',
            email: 'admin4example.com',
            pass: 'admin',
            rememberMe: false
        },
        {
            name: 'TC_ALF_007',
            email: 'admin4@',
            pass: 'Admin1245',
            rememberMe: false
        },
        {
            name: 'TC_ALF_008',
            email: 'admin@@domain.com',
            pass: 'a',
            rememberMe: false
        },
    ]

    testCases.forEach(({name, email, pass, rememberMe}) => {
        it(name, () => {
            cy.adminLogIn(email, pass, rememberMe);
            cy.get('input[type="email"]')
            .then(($input) => {
                expect($input[0].checkValidity()).to.be.false
            })
        })
    })
})

describe('TS_ALF_004', () => {
    const rememberMe = false;
    it('TC_ALF_009', () => {
        cy.visit("http://localhost:3000/admin");
        cy.get("input[id='adminpassword']").type('admin');
        if (rememberMe) {
            cy.get("input[class='PrivateSwitchBase-input css-j8yymo']").check();
        }
        cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth css-suxgn8-MuiButtonBase-root-MuiButton-root']").click();
        cy.get('input[type="email"]')
        .then(($input) => {
            expect($input[0].checkValidity()).to.be.false
        })
    })
})

describe('TS_ALF_005', () => {
    const rememberMe= false;
    it('TC_ALF_010', () => {
        cy.visit("http://localhost:3000/admin");
        cy.get("input[id='adminemail']").type('noyon@example.com');
        if (rememberMe) {
            cy.get("input[class='PrivateSwitchBase-input css-j8yymo']").check();
        }
        cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth css-suxgn8-MuiButtonBase-root-MuiButton-root']").click();
        cy.get('input[type="password"').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        })
    })
})

describe('TS_ALF_006', () => {
    const rememberMe = false;
    it('TC_ALF_011', () => {
        cy.visit("http://localhost:3000/admin");
        if (rememberMe) {
            cy.get("input[class='PrivateSwitchBase-input css-j8yymo']").check();
        }
        cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedSuccess MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorSuccess MuiButton-fullWidth css-suxgn8-MuiButtonBase-root-MuiButton-root']").click();
        cy.get('input[type="email"').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        })
        cy.get('input[type="password"').then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        })
    })
}) 

describe('TS_ALF_007', () => {
    const testCases = [
        {
            name:'TC_ALF_012',
            email:'noyonsaha@gmail.com',
            pass: 'Admin',
            rememberMe: false,
        },
        {
            name:'TC_ALF_013',
            email:'admin6@example.com',
            pass: 'admin',
            rememberMe: false,
        }
    ]

    testCases.forEach(({name, email, pass, rememberMe}) => {
        it(name, () => {
            cy.adminLogIn(email, pass, rememberMe);
            cy.contains('This email is not registered in the system');
        })
    })
})

describe('TS_ALF_008', () => {
    const testCases = [
        {
            name: 'TC_ALF_014',
            email: 'noyon@example.com',
            pass: 'admin',
            rememberMe: true
        }
    ]

    testCases.forEach(({name, email, pass, rememberMe}) => {
        it(name, () => {
            cy.adminLogIn(email, pass, rememberMe);
            cy.url().should('include', '/admin');
            cy.contains('Welcome to the Admin Dashboard.');
            // Simulate browser close (fresh session)
            cy.clearCookies();
            cy.clearLocalStorage();
            cy.reload();
            cy.visit('http://localhost:3000/admin');
            cy.url().should('include', '/admin');
            cy.contains('Welcome to the Admin Dashboard.');
        })
    })

    it('TC_ALF_015', () => {
        cy.adminLogIn('noyon@example.com', 'admin', false);
        cy.url().should('include', '/admin');
        cy.contains('Welcome to the Admin Dashboard.');
        // Simulate browser close (fresh session)
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();
        cy.visit('http://localhost:3000/admin');
        cy.url().should('include', '/login');
        cy.contains('Admin Login');
    })
})

describe('TS_ALF_009', () => {
    it('TC_ALF_016', () => {
        cy.visit('http://localhost:3000/admin');
        cy.get("input[id='adminpassword']").focus();
        cy.get("input[id='adminpassword']").type('Admin@123');
        cy.get("input[id='adminpassword']").should('have.attr', 'type', 'password');
    })
})

describe('TS_ALF_010', () => {
    it('TC_ALF_017', () => {
        cy.visit('http://localhost:3000/admin');
        const checkboxSelector = "input[class='PrivateSwitchBase-input css-j8yymo']";
        cy.get(checkboxSelector)
        .should('exist')
        .should('not.be.checked');
        cy.get(checkboxSelector).click();
        cy.get(checkboxSelector).should('be.checked');
        cy.get(checkboxSelector).click();
        cy.get(checkboxSelector).should('not.be.checked');
    })
})