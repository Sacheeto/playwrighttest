import { createBdd } from "playwright-bdd";
const{Given ,When, Then}=createBdd()
import { Practiseformpage } from "../pages/practiseFormpage";
Given ("Launch url", async({page})=>{
    const practiseFormpage=new Practiseformpage(page)
    await practiseFormpage.launchurl("https://demoqa.com/automation-practice-form")
})
When ("Enter input data", async({page})=>{
    const inpdata=new Practiseformpage(page)
    await inpdata.enterfirstname("kiran")
    await inpdata.enterlastname("itla")
    await inpdata.enteremail("xyz@rediffmail.com")
    await inpdata.radiobutton()
    await inpdata.uploadpic1("tests/steps/practiseFormstep.ts")
//    await inpdata.entersubjects("Physics")
    await inpdata.entermobile('9899312485')
    await inpdata.entercurraddr('vizag')
    await inpdata.dropdown('Uttar Pradesh','Agra')
    }
)