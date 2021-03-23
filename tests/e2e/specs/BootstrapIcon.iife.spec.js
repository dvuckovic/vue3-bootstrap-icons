describe('BootstrapIcon (IIFE)', () => {
    Cypress.on('window:before:load', (win) => {
        cy.spy(win.console, 'warn');
    });

    it('mounts successfully', () => {
        cy.visit('/');
        cy.get('.bi').should('have.length', 1);
        cy.get('use').should('have.attr', 'xlink:href')
            .and('match', /bootstrap-icons\.svg#undefined$/);

        cy.window().then((win) => {
            expect(win.console.warn).to.be.calledWithMatch('Invalid prop: type check failed for prop "icon"');
        });
    });

    it('supports the icon prop', () => {
        const icon = 'exclamation-circle-fill';

        cy.window().then((win) => {
            win.app.icon = icon;
        });

        cy.get('use').should('have.attr', 'xlink:href')
            .and('match', new RegExp(`bootstrap-icons\\.svg#${icon}$`));
    });

    it('supports the variant prop', () => {
        const variant = 'danger';

        cy.window().then((win) => {
            win.app.variant = variant;
        });

        cy.get('.bi').should('have.class', 'bi--variant-danger');
    });

    it('supports the size prop', () => {
        const size = 'md';

        cy.window().then((win) => {
            win.app.size = size;
        });

        cy.get('.bi').should('have.class', 'bi--size-md');
    });

    it('supports the flip props', () => {
        cy.get('g').should('have.attr', 'transform')
            .and('match', /scale\(-1 1\)/);

        cy.window().then((win) => {
            win.app.flipV = true;
        });

        cy.get('g').should('have.attr', 'transform')
            .and('match', /scale\(-1 -1\)/);

        cy.window().then((win) => {
            win.app.flipH = false;
        });

        cy.get('g').should('have.attr', 'transform')
            .and('match', /scale\(1 -1\)/);
    });

    it('supports the rotate prop', () => {
        const rotate = 90;

        cy.window().then((win) => {
            win.app.rotate = rotate;
        });

        cy.get('g').should('have.attr', 'transform')
            .and('match', new RegExp(`rotate\\(${rotate}\\)`));
    });

    it('supports the animation prop', () => {
        const animation = 'spin';

        cy.window().then((win) => {
            win.app.animation = animation;
        });

        cy.get('.bi').should('have.class', `bi--animation-${animation}`);
    });
});
