
import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const createUser = mutation ({
         args: 
         { 
        name:v.string(),
        email:v.string(),

         },
         handler: async(ctx, args) => {
              // it will check if usre data in or not 
                const userData = await ctx.db.query("users").filter(q=>q.eq(q.field("email"), args.email)).collect();
                //“Give me all users from the users table whose email is equal to the provided args.email.”

                if (userData.length > 0) {
                    // if user data is present then to update the user data
                    return userData[0];
                 }
                else{
                    const data={
                        name:args.name,
                        email:args.email,
                        credits:50000,
                     
                    }
                    //if user data is not present then to add new user
                    const result = await ctx.db.insert("users", {
                      ...data
                    });
                    console.log(result);
                    return data
                }
              //if not then to add new use

              
         }

})