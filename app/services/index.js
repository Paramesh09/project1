const student = require('../model/index');

//const student = db.Student;

//Create Validation
async function CreateStudent(inputdata) {
    debugger

    //Adding new entry to the table
    const newEntry = new student;
    // console.log("recored", newEntry);
    newEntry.name = inputdata.name;
    newEntry.age = inputdata.age;

    try {
        if (newEntry) {
            var createRow = await newEntry.save();
            return { isSuccess: true, message: "Student Created Successfully!!", data: createRow };
        }
        return { isSuccess: false, message: "Failed to Create Student!!", data: err };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to the Create Student!!", data: err };
    }
};

//Read Validation
async function GetStudentsDetails() {
    debugger

    const users = await student.aggregate([
        // { $match: { age: { $gte: 30}}},
        // { $group: {
        //     _id:{
        //     name:'$name', age: '$age'}
        //           } 
        // },
        // { $count : 'Matches' }

        // {
        //     $project: {
        //       "name": 0,
        //       "age": 1,
        //     }
        //   },
        //   {
        //     $limit: 2
        //   }

        // {
        //     $addFields: {
        //       avgAge: { $avg: "$age" }
        //     }
        //   },
        //  {
        //     $project: {
        //       "name": 1,
        //       "age": 1,
        //       "avgAge": 1
        //     }
        //   },
        //   {
        //     $limit: 2
        //   }

        // [ { $unwind : "$age" } ]
    ]);
    try {
        //console.log("USers", users);
        if (users) {
            return { isSuccess: true, message: "Students listed Successfully!!", data: users };
        }
        return { isSuccess: false, message: "Failed to list Student!!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to access Students Detail!!", data: err };
    }
};

//Update Validation
async function UpdateStudentsDetails(inputdata) {
    debugger

    const users = await student.findOne({ name: inputdata.name });
    try {
        if (users) {
            users.age = inputdata.age;
            // console.log("USers", users);
            users.save();
            return { isSuccess: true, message: "Student updated Successfully!!", data: users };
        }
        return { isSuccess: false, message: "Unable to update Student details!!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to Update!!", data: err };
    }
};

//Delete Validation
async function DeleteStudentDetails (inputdata){
    debugger

    const users = await student.findOne({ name : inputdata.name });
    try {
        if(users) {
            users.deleteOne();
            return { isSuccess: true, message: "Student deleted successfully!"}
        }
        return { isSuccess: false, message: "unable to delete student details" } 
    }
    catch(err){
        return { isSuccess: false, message: "Unable to delete", data: err }
    }
}

module.exports = {
    createStudent : CreateStudent,
    getStudentDetails : GetStudentsDetails,
    updateStudentDetails : UpdateStudentsDetails,
    deleteStudentDetails : DeleteStudentDetails
}