export class User {
  constructor(
   public gettoken: any,
   public _id: string,
   public name: String,
   public lastname: String,
   public rut: String,
   public email: String,
   public formation: String,
   public yearold: String,
   public gender: String,
   public password: String,
   public image: String,
   // Coach
   public role_coach: String,
   public payment_bolet: Boolean,
   public payment_facture30: Boolean,
   public payment_facture60: Boolean,
   public payment_facture90: Boolean,
   public description: String,
   public region1: String,
   public region2: String,
   public region3: String,
   public phone_number: String,
   // Coachee
   public registration_date: String,
   public institution: String,
   public institution_code: String,
   public personas_cargo: Number,
   public role_coachee: String
) {}
}
