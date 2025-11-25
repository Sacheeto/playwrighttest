   import { Locator, Page } from "@playwright/test"; 
   export class Button{
    page:Page
    doubleclickme: Locator
    rightclickme: Locator
    Clickme: Locator
        constructor(page)
        {
            this.page=page
            this.doubleclickme=this.page.locator('[id="doubleClickBtn"]')
            this.rightclickme=this.page.locator('[id="rightClickBtn"]')
            this.Clickme=this.page.getByRole('button', { name: 'Click Me', exact: true })
        }
    public async clickactions()
    {
        await this.doubleclickme.dblclick()
        await this.rightclickme.click({button:'right'})
        await this.Clickme.click()
        await this.page.pause()
    }
   }