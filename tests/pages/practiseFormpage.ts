import { Page,Locator } from "@playwright/test";
export class Practiseformpage{
    page:Page
    firstname: Locator
    lastname: Locator
    emailid: Locator
    genmale: Locator
    genfemale: Locator
    genother: Locator
    mobilenum: Locator
    dob: Locator
    subject: Locator
    hobbysport: Locator
    hobbyread: Locator
    hobbymusic: Locator
    picture: Locator
    curraddr: Locator
    selstate: Locator
    selcity: Locator
    uploadpic: Locator
    
    constructor (page){
        this.page=page  
        this.firstname=this.page.locator('[id="firstName"]')
        this.lastname=this.page.locator('[id="lastName"]')
        this.emailid=this.page.locator('[id="userEmail"]')
        this.genmale=this.page.locator('div').filter({ hasText: /^Male$/ })  
        this.genfemale=this.page.getByText('Female')
        this.genother=this.page.getByText('Other')
        this.dob=this.page.locator('[id="dateOfBirthInput"]')
        this.mobilenum=this.page.getByRole('textbox', { name: 'Mobile Number' })
        this.subject=this.page.locator('[class*="subjects-auto-complete__value-container"]')
        this.hobbysport=this.page.getByText('Sports')
        this.hobbyread=this.page.getByText('Reading')
        this.hobbymusic=this.page.getByText('Music')
        this.picture=this.page.getByText('Select picture')
        this.curraddr=this.page.locator('[id="currentAddress"]')
//        this.state=this.page.getByText('Select State')
        this.selstate=this.page.locator('[id="state"]')
//        this.city=this.page.getByText('Select City')
        this.selcity=this.page.locator('[id="city"]')
        this.uploadpic=this.page.locator('[id="uploadPicture"]')
                       
    }
    public async launchurl(url)
    {
        await this.page.goto(url)
        
    }
    public async enterfirstname(name)
    {
        await this.firstname.fill(name)
    }
    public async enterlastname(name)
    {
        await this.lastname.fill(name)
    }
    public async enteremail(email)
    {
        await this.emailid.fill(email)
        await this.emailid.clear()
 //       await this.page.pause()
    }
    public async radiobutton()
    {
        await this.genmale.click()
        await this.genfemale.click()
        await this.genother.click()
//        await this.page.pause()
        
    }
    public async entermobile(mobnum)
    {
        await this.mobilenum.fill(mobnum)        
    }
    public async enterdob(dob)
    {
        await this.dob.fill(dob)        
    }
    public async entersubjects(subject)
    {   await this.subject.click()
        await this.subject.fill(subject)
    }
    public async checkbox()
    {
        await this.hobbymusic.click()
        await this.hobbyread.click()
        await this.hobbysport.click()        
    }
    public async uploadpic1(path){
        await this.uploadpic.setInputFiles(path)   
//      uploadfile("tests/steps/textboxstep.ts")                
    }
    public async entercurraddr(curraddr)
    {
        await this.curraddr.fill(curraddr)
    }
//dropdown
  public async dropdown(state,city)
  {
        await this.page.locator('[id="stateCity-wrapper"] [class*="indicatorContainer"]').nth(0).click();
        await this.page.getByText(state, { exact: true }).click();
        await this.page.locator('[id="stateCity-wrapper"] [class*="indicatorContainer"]').nth(-1).click();
        await this.page.getByText(city, { exact: true }).click();
  //       await this.selstate.fill(selstate)
  //       await this.selcity.fill(selcity)
  }
}