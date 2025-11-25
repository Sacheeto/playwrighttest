import { Page, Locator } from "@playwright/test";
export class Loginpage{
    page:Page
    firstname:Locator
    surname:Locator
    birthday:Locator
    constructor(page){
        this.page=page
        this.firstname=this.page.locator('[name="firstname"]')
        this.surname=this.page.locator('[name="lastname"]')
        this.birthday=this.page.locator('[name="birthday_day"]')
        

    }

}