import { Locator, Page } from "@playwright/test";
export class Textpage{
    page:Page
    fullname: Locator
    email: Locator
    currentaddr: Locator
    permaddr: Locator

    constructor (page){
        this.page=page
        this.fullname=this.page.locator('[id="userName"]')
        this.email=this.page.locator('[id="userEmail"]')
        this.currentaddr=this.page.locator('[id="currentAddress"]')
        this.permaddr=this.page.locator('[id="permanentAddress"]')
    }
    public async launchurl(url)
    {
        await this.page.goto(url)        
    }
    public async enterfullname(name)
    {
        await this.fullname.fill(name)
    }
    public async enteremail(name)
    {
        await this.email.fill(name)
    }
    public async entercurrentaddr(name)
    {
        await this.currentaddr.fill(name)
    }
    public async enterpermaddr(name)
    {
        await this.permaddr.fill(name)
    }
}