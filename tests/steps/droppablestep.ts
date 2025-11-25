import { createBdd } from "playwright-bdd";
const{Given, When, Then}= createBdd()
import { Droppable } from "../pages/droppable";
import { Practiseformpage } from "../pages/practiseFormpage";
Given ("Launch the dropable url", async({page})=>{
    const practiseFormpage=new Practiseformpage(page)
    const droppable=new Droppable(page)
    await practiseFormpage.launchurl("https://demoqa.com/droppable")
}
)
Given ("dragfile and drop in droppable file", async({page})=>{
    const droppable=new Droppable(page)
    await droppable.drag()
}
)





 