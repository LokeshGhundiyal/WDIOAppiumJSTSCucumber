//page responsible to hold all the common functionalities in application
//this page will be inherited by all pages created so that, they have access to these elements and functionalities
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
