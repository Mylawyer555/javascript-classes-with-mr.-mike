const user = {
    firstname: "Samuel",
    lastname: "Abel",
    role: "Admin",
    loggincount: 20,
    facebooksignin: true,
    courselist: [],
    buyCourse: function (courseName) {
        this.courselist.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstname} has a total of ${this.courselist.length} courses`
    },
    courseInfo: function () {
        return `
            firstname: ${this.firstname},
            lastname: ${this.lastname},
            role: ${this.role},
            loggincount: ${this.loggincount},
            facebooksignin: ${this.facebooksignin},
            courselist: ${this.courselist},
 
        `
    },
};

let courselist = false;

user.buyCourse("Node js");
user.buyCourse("react js");
user.buyCourse(" nest js");
user.buyCourse("next js");

//console.log(user.getCourseCount());

console.table(user.courseInfo())