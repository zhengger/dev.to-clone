import { buildSchema } from "type-graphql";
import { RegisterResolver } from "../modules/User/Register/Register.resolver";
import { LoginResolver } from "../modules/User/Login/Login.resolver";
import { UserUtilityResolver } from "../modules/User/Utility/UserUtility.resolver";
import { PostResolver } from "./../modules/Post/Post.resolver";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      RegisterResolver,
      LoginResolver,
      UserUtilityResolver,
      PostResolver
    ]
  });
