

let database_user_name="gopi123vishwakarma";
let database_password="123456789";

let my_user_name="gopi123vishwakarma";
let my_password="123456789";

if(database_user_name==my_user_name){
  if(database_password==my_password){
    console.log("login successfully")
  }
  else{
    console.log("your password is wrong! please check");
  }
}
else{
   console.log("your user name not matched")
}