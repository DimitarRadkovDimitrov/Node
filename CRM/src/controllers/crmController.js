import mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = function(req, res) 
{
    let newContact = new Contact(req.body);
    newContact.save(function(error, contact)
    {
        if (error)
        {
            res.send(error);
        }
        else
        {
            res.json(contact);
        }       
    });
};

export const getContacts = function(req, res)
{
    Contact.find({}, function(error, contact)
    {
        if (error)
        {
            res.send(error);
        }
        else
        {
            res.json(contact);
        }
    });
};

export const getContactById = function(req, res)
{
    Contact.findById(req.params.contactId, function(error, contact) 
    {
        if (error)
        {
            res.send(error);
        }
        else
        {
            res.send(contact);
        }
    });
};

export const updateContact = function(req, res)
{
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(error, contact)
    {
        if (error)
        {
            res.send(error);
        }
        else
        {
            res.send(contact);
        }
    });
};

export const deleteContact = function(req, res)
{
    Contact.remove({_id: req.params.contactId}, function(error, contact)
    {
        if (error)
        {
            res.send(error);
        }
        else
        {
            res.send({message: 'Contact Successfully Deleted'});
        }
    });  
};