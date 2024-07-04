export default class Page {
    get openMenu() {return $('~open menu')};
    get loginMenuOption() {return $('~menu item log in')};

    public async openMenuOptions () {
        await this.openMenu.click();
    }

    public async navigateToLoginPage(){
        await this.loginMenuOption.click();
    }
}
