import { Locator ,Page} from "@playwright/test";
export class Uploaddownld{
 page:Page
 upload: Locator
 download: Locator

 constructor (page)
 {
    this.page=page
    this.download=this.page.locator('[id="downloadButton"]')
    this.upload=this.page.locator('[id="uploadFile"]')
 } 
public async uploadfile(path)
{
await this.upload.setInputFiles(path)
}
}
