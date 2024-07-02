import { getContactById, listContacts, removeContact } from "../services/contactsServices.js";
import { createContactSchema, updateContactSchema } from '../schemas/contactsSchemas.js'
import { addContact } from '../services/contactsServices.js'
import  HttpError  from '../helpers/HttpError.js'

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await listContacts();
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

export const getOneContact = async(req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await getContactById(id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            next(HttpError.create(404, "Not found"));
        }
    } catch (error) {
        next(error);
    }
};

export const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const removedContact = await removeContact(id);
        if (removedContact) {
            res.status(200).json(removedContact);
        } else {
            next(HttpError.create(404, "Not found"));
        }
    } catch (error) {
        next(error);
    }
};

export const createContact = async (req, res, next) => {
    try {
        const newContact = await addContact(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        next(error);
    }
};

export const updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        if (Object.keys(updates).length === 0) {
            next(HttpError.create(400, "Body must have at least one field"));
        }
        const updatedContact = await updateContact(id, updates);
        if (updatedContact) {
            res.status(200).json(updatedContact);
        } else {
            next(HttpError.create(404, "Not found"));
        }
    } catch (error) {
        next(error);
    }
};