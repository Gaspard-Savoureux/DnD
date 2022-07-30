import Race from "../../models/models/Race";
export default {
  Query: {
    race: async (_parent: any, {_id}: any, context: any, info: any) => {
      return await Race.findOne({ _id }).exec();;
    },
    races: async (_parent: any, context: any, info: any) => {
      return await Race.find().exec();;
    },
  }
};