// Create and application with the following roles:
// admin - gets full access
// subAdmin - get access to create/delete course
// testPrep - get access to create/delete test
// client - get access to consume content


let user = "client";

switch (user) {
    case "admin":
        console.log("gets full access");
        break;
    case "subAdmin":
        console.log("get access to create/delete course");
        break;
    case "testPrep":
        console.log("get access to create/delete test");
        break;
    case "client":
        console.log("get access to consume content");
        break;

    default:
        console.log("Trial Client");
        break;
}