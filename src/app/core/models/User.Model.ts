export interface User {
   "employeeId": string,
    "employeeName": string,
    "contactNo": string,
    "emailId": string,
    "deptId": number,
    "password": string,
    "gender": string,
    "role": string,
    "createdDate": string
}

export interface UserResponse {
    status: string;
    message: string;
    data:any;
}

export interface IpaerntDeperModerl{
    
      departmentId: number;
      departmentName: string;
      departmentLogo: string;
     
}

export interface IchilddepartModel{
  
      childDeptId: number;
      parentDeptId:number;
      departmentName: string;
    
}