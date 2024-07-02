import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filterName) => {
        return contacts.filter((contact) =>
            contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()) || contact.number.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
        );
    }
)