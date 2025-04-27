export class Admin
{
  
  public adminName:string;
  public adminPassword:string;
  public userEmail:string;
  public dob:Date;
  public about:string;
  public role:string;


  constructor(adminName:any,adminPassword:any,email:any, dob:any, about:any, role:any)
  {
  
    this.adminName=adminName;
    this.userEmail=email;
    this.adminPassword=adminPassword;
    this.dob=dob;
    this.about=about;
    this.role=role;
  }
}