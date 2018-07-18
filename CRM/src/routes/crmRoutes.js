import {
    addNewContact, 
    getContacts, 
    getContactById, 
    updateContact,
    deleteContact,
} from '../controllers/crmController';

//Routes in application and respective CRUD operations
const routes = (app) => 
{
    //Contact Route
    app.route('/contact')
        //READ Contacts
        .get((req, res, next) => 
        {
            //Middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getContacts)
        
        //POST endpoint - add new contact
        .post(addNewContact);

    //Contact Id Route
    app.route('/contact/:contactId')
        //READ Contact by Id
        .get(getContactById)

        //UPDATE Contact by Id
        .put(updateContact)

        //DELETE Contact by Id
        .delete(deleteContact);
}

export default routes;