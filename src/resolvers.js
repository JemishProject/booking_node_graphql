import { Seller } from "./models/Seller";
import bcrypt from "bcrypt";

export const resolvers = {
  Query: {
    hello: () => "hi",
    sellers: () => Seller.find()
  },
  Mutation: {
    createSeller: async (_, args) => {
      console.log("email", args)

      const userExist = await Seller.findOne({email: args.email})

      if(!userExist){

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(args.password, salt)
        const seller = new Seller({ 
          email: args.email, 
          password: hashPassword
        });
        const userSeller = await seller.save();

        return userSeller
      } else {
        throw new Error({
          errors: [{
            "statusCode": 403,
            "message": "User already exists."
          }],
        })
      }
    }
  }
};
