import { createBdd } from "playwright-bdd";
const {Given, When, Then}=createBdd()
import { Uploaddownld } from "../pages/uploaddwnload";
import { Practiseformpage } from "../pages/practiseFormpage";
Given ("Select the file to upload", async({page})=>{
    const uploaddwnload= new Uploaddownld(page)
    await uploaddwnload.uploadfile("tests/steps/textboxstep.ts")    
    await page.pause()
})
Given ("Launch the uploaddownld url", async({page})=>{
    const practiseFormpage=new Practiseformpage(page)
    await practiseFormpage.launchurl("https://demoqa.com/upload-download")
})



