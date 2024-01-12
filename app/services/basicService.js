const basicDetails = require('../model/basicInfo');

//Create Validation
async function CreateBasicInfo(inputdata) {
    debugger

    const newEntry = new basicDetails;
    newEntry.sName = inputdata.sName;
    newEntry.email = inputdata.email;
    newEntry.depart = inputdata.depart;
    newEntry.batch = inputdata.batch;
    newEntry.dob = inputdata.dob;

    try {
        if (newEntry) {
            var createRow = await newEntry.save();
            return { isSuccess: true, message: "Information Created Successfully!!", data: createRow };
        }
        return { isSuccess: false, message: "Failed to Create Information!!", data: err };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to the Create Information!!", data: err };
    }
};

//Read Validation
async function GetBasicInfo() {
    debugger

    const users = await basicDetails.find();
    try {
        //console.log("USers", users);
        if (users) {
            return { isSuccess: true, message: "Information listed Successfully!!", data: users };
        }
        return { isSuccess: false, message: "Failed to list Information!!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to access Information Detail!!", data: err };
    }
};

//Filter
async function SearchBasicInfo(dsearch) {
    debugger

    try {
        // let match = {};
        // if(dsearch){
        //     match.$or = [{ sName: new RegExp(dsearch.sName, "i")}, 
        //     { email: new RegExp(dsearch.email, "i")},
        //     { depart: new RegExp(dsearch.depart, "i")}
        // ]}
        // if(dsearch.batch){
        //     match.batch = parseInt(dsearch.batch)
        // }
        
        const users = await basicDetails.find(dsearch)
        if (users) {
            return { isSuccess: true, message: "Information listed Successfully!!", data: users };
        }
        return { isSuccess: false, message: "No Details!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "No Information Found!", data: err };
    }
};

module.exports = {
    createBasicInfo: CreateBasicInfo,
    getBasicInfo: GetBasicInfo,
    searchBasicInfo: SearchBasicInfo
}