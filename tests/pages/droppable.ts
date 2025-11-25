import { Locator, Page } from "@playwright/test";
export class Droppable{
    page:Page
    dragging: Locator
    dropping: Locator
    constructor(page){
        this.page=page
        this.dragging=this.page.locator('[id="draggable"]')
        this.dropping=this.page.locator('[id="simpleDropContainer"] [id="droppable"]')
}
public async drag(){
await this.dragging.dragTo(this.dropping)
await this.page.pause()
}


}