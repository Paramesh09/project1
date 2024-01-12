const newAddress = require('../model/address');

//Create Validation
async function CreateAddress(inputdata) {
    debugger

    //Adding new entry to the table
    const newEntry = new newAddress;
    newEntry.name = inputdata.name;
    newEntry.address = inputdata.address;
    newEntry.phone = inputdata.phone;

    try {
        if (newEntry) {
            var createRow = await newEntry.save();
            return { isSuccess: true, message: "Address Created Successfully!!", data: createRow };
        }
        return { isSuccess: false, message: "Failed to Create Address!!", data: err };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to the Create Address!!", data: err };
    }
};

//Read Validation
async function GetAddressDetails() {
    debugger

    const users = await newAddress.aggregate([
        {
            $lookup: {
                from: "studentslists",
                localField: "studid",
                foreignField: "name",
                as: "contact_details",
            },
        },
        //   {$out: 'CombinedDetails'}
    ]);
    try {
        //console.log("USers", users);
        if (users) {
            return { isSuccess: true, message: "Address listed Successfully!!", data: users };
        }
        return { isSuccess: false, message: "Failed to list Address!!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "Failed to access Address Detail!!", data: err };
    }
};

// //Search
// async function SearchDetails(dsearch) {
//     debugger

//     // console.log("log", dsearch);
//     const users = await newAddress.find(
//         {
//             $or: [
//                 { address: { $regex: dsearch.address } }, { phone: { $regex: dsearch.phone } }]
//         }
//         );
//         // {$or:[{address:{'$regex':req.query.dsearch}},{phone:{'$regex':req.query.dsearch}}]}

//     // console.log("add", users);
//     try {
//         if (users) {
//             return { isSuccess: true, message: "Address listed Successfully!!", data: users };
//         }
//         return { isSuccess: false, message: "No Details!" };
//     }
//     catch (err) {
//         console.log(err)
//         return { isSuccess: false, message: "No Records Found!", data: err };
//     }
// };

//Filter
async function SearchDetails(dsearch) {
    debugger

    try {
        let match = {};
        if(dsearch){
            match.$or = [{ address: new RegExp(dsearch.address, "i")}, 
            // { phone: new RegExp(dsearch.phone)}
        ]}
        if(dsearch.phone){
            match.phone = parseInt(dsearch.phone)
        }
        // $text: {
        //     $search: query
        // }
        const users = await newAddress.aggregate([{$match: match}])
        if (users) {
            return { isSuccess: true, message: "Address listed Successfully!!", data: users };
        }
        return { isSuccess: false, message: "No Details!" };
    }
    catch (err) {
        console.log(err)
        return { isSuccess: false, message: "No Records Found!", data: err };
    }
};
module.exports = {
    createAddress: CreateAddress,
    getAddressDetails: GetAddressDetails,
    searchDetails: SearchDetails
}