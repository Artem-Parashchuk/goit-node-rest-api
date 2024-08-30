import { Contact } from "../schemas/contactSchemas.js";


export const getContacts = () => Contact.find()
export const getContactById = (id) => Contact.findOne({ _id: id });
export const removeContact = (id) => Contact.findByIdAndDelete(id)
export const addContact = (data) => Contact.create(data)
export const updateContactService = (id, body) => Contact.findOneAndUpdate(id, body)
export const updateStatusContactService = (id, body) => Contact.findByIdAndUpdate(id, body)
