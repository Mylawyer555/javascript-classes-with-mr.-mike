//  Define a funstion that can answer the role of a user.
//  A user can be on the following roles:
//  admin - gets full access
//  subAdmin - get access to create/delete course
//  testPrep - get access to create/delete test
// client - get access to consume content
//  others - trial users


const isUserRole = function(name, role) {
    
    switch (role) {
        case 'admin':
            return `${name} gets full access.`
           
        case 'subAdmin':
            return `${name}get access to create/delete course.`
           
        case 'testPrep':
            return `${name} get access to create/delete test.`
           
        case 'client':
            return `${name} get access to consume content.`
           
    
        default:
             return `${name} trial users.`
           
    }

}

console.log(isUserRole('Martha', 'admin'));

let assignedRole = isUserRole('Martha', 'client')

console.log(assignedRole);