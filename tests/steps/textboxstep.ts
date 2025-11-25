import { createBdd } from "playwright-bdd";
const{Given ,When, Then}=createBdd()
import { Practiseformpage } from "../pages/practiseFormpage";
import { Textpage } from "../pages/textpage";
Given ("Launch textbox url", async({page})=>{
    const practiseFormpage=new Practiseformpage(page)
    await practiseFormpage.launchurl("https://demoqa.com/text-box")
})
Then ("Enter details of customer", async({page})=>{
    const textBoxpage=new Textpage(page)
    await textBoxpage.enterfullname("kiran")
    await textBoxpage.enteremail("abc@hotmail.com")
    await textBoxpage.entercurrentaddr("vizag")
    await textBoxpage.enterpermaddr("auckland")   
//    await page.pause() 
})