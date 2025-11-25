import { createBdd } from "playwright-bdd";
const{Given, When, Then}= createBdd()
import { Button } from "../pages/button";
import { Practiseformpage } from "../pages/practiseFormpage";
Given ("Launch the button url", async({page})=>{
const practiseFormpage=new Practiseformpage(page)
    const button=new Button(page)
    await practiseFormpage.launchurl("https://demoqa.com/buttons")
})
Then ("Click buttons",async({page})=>{
    const button= new Button(page)
    await button.clickactions()
} )


