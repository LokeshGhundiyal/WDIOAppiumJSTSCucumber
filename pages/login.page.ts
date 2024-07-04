import Page from "./page.ts";

class LoginPage extends Page {

    get usernameInput(){return $('~Username input field')};
    get passwordInput(){return $('~Password input field')};
    get loginBtn(){return $('~Login button')};
    get loginErrMsg(){return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')};
    get passwordErrMsg(){return $('//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView')};
    get usernameErrMsg(){return $('//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView')};
   
    public async performLogin (username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }
}

export default new LoginPage();
