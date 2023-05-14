// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.


let  myself= {

    name: "Manjila Nepali",
    address:" sankhuwasabha Khandbari",
    Email: "manzeelanepali2@gmail.com",
    Interest :"Travelling, Programming,Watching Movies",
    Education:  [{
        name: "bachelors of Computer Science and Information Technology",
        Enrolled_Date: 2018-05-11
    }]
}
    for ( const Education of myself.Education){
        console.log(`Name: ${Education.name}, Date: ${Education.Enrolled_Date}`)
    

}