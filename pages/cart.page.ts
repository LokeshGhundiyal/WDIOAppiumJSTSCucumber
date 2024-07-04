import Page from "./page.js";

class CartPage extends Page {
    get goShoppingBtn() {return $('~Go Shopping button')}
}
export default new CartPage();
