/*
    Single Responsibility Principle

    A class should have one and only one reason to change, meaning that a class should only have one job.

*/

/* A function with such a name is a symptom of ignoring the Single Responsibility Principle
 *  Validation and Specific implementation of the user creation is strongly coupled.
 *  That's not good
 */

validateAndCreatePostgresUser = (name, password, email) => {
    //Call an external function to validate the user form
    const isFormValid = testForm(name, password, email);

    //Form is Valid
    if (isFormValid) {
        User.Create(name, password, email); //Specific implementation of the user creation!
    }
};
