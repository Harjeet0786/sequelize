// module.exports = (sequalize, DataTypes) => {
//   const Users = sequalize.define(
//     //
//     "users",
//     {
//       name: DataTypes.STRING,
//       email: {
//         types: DataTypes.STRING,
//         defaultValue: "test@gmail.com",
//       },
//       gender: {
//         type: DataTypes.STRING,
//       },
//       //updated -at:false
//       //Stimestams: false,
//     }
//     // ["require", "dependency"],
//     // function (require, factory) {
//     //   "use strict";
//     // }
//   );
// };
// //

module.exports = (sequalize, DataTypes) => {
  const Users = sequalize.define(
    //
    "users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.STRING,
      Password: DataTypes.STRING,
      gender: DataTypes.STRING,
    }
    // {
    //   tableName: "userData",//use a parameter to create the table  or change name
    // }
    // {timestemps: true,}new table create use the timestemps recreate or changes created or updated
    //create_at:false
    //updated _at: false// or name changees
    //Created_At:"created_at";
    //engine: myisam
  );
};
