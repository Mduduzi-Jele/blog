import { useState } from "react"
export const LogMe = () => {
    const user = {
        name :'Judith',
        password : "Judy",
        email : "addJudyCourt@gmail.com",
        mypost : [ {
        title :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur nisi dolorum fugit error reiciendis suscipit officiis delectus autem voluptatem consequatur maiores magnam molestias, fuga nesciunt magni nostrum harum minus!",
        body:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat excepturi dolores modi doloribus quidem esse tempora blanditiis. Minus fuga in magnam numquam obcaecati doloremque, veniam, necessitatibus quam aspernatur nostrum accusamus.",

        }]
    }
    localStorage.setItem("2", JSON.stringify(user));
    const [email , setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>('');
    const data = Object.keys(localStorage);



    return (
       {
        data.map ((data, index) => {
            const logindetails: string | null = localStorage.getItem(data);
            logindetails ? JSON.parse(logindetails) : "You have no account, Please sign up."
            loggedIn.
      
            return (
              <div>
      
              </div>
            )
       }
    )
}