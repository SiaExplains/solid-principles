/*
This seems a pretty little change, but think about strongly coupling all the methods, than you have to change the Database for any reason...
*/
//Only Validate
validateRequest = (req) => {
    //Call an external function to validate the user form
    const isFormValid = testForm(name, password, email);

    //Form is Valid
    if (isFormValid) {
        createUser(req); // The user creation will be implemented in another function
    }
};

//Only Create User in the Database
createUser = (req) => User.Create(req.name, req.password, req.email);
