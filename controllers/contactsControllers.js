import { addContact, getContactById, getContacts, removeContact, updateContactService, updateStatusContactService } from '../services/contactsServices.js'
import HttpError from '../helpers/HttpError.js'

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await getContacts();
        res.json({
            status: 200,
            message: "Contacts get successfully",
            contacts,
        });
    } catch (error) {
        next(error);
    }
};

export const getOneContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const contact = await getContactById(id);

        if (!contact) {
            return res.status(404).json({
                status: 404,
                message: `Contact with id: ${id} not found`,
                data: {
                    message: `Contact with id: ${id} not found`
                }
            })
        }

        res.json({
            status: 200,
            message: `Contact with id: ${id} get successfully`,
            contact,
        });
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
        const updatedContact = await updateContactService(id, updates);
        if (updatedContact) {
            res.status(200).json(updatedContact);
        } else {
            next(HttpError.create(404, "Not found"));
        }
    } catch (error) {
        next(error);
    }
};

export const updateStatusContact = async (req, res, next) => {
    try {
        const { id } = req.params
        const updates = await updateStatusContactService(id, req.body)

        if (!updates) {
            return next(HttpError.create(404, "Not found"));
        }

        res.status(200).json({
            status: 200,
            message: `Contact-status was updated successfully`,
            updates
        });
    } catch (error) {
        next(error);
    }
}