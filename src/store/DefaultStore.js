// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', {
  // ==|== State ===================================================================================
  state: () => {
    return {
      contact: [],
      social: [],
      links: []
    };
  },

  // ==|== Actions =================================================================================
  actions: {
    fetchContact() {
      Service.getContact().then((response) => {
        this.contact = response[0];
      });
    },
    fetchSocial() {
      Service.getSocial().then((response) => {
        this.social = response;
      });
    },
    fetchLinks() {
      Service.getLinks().then((response) => {
        this.links = response;
      });
    }
  },

  // ==|== Getters =================================================================================
  getters: {
    getName: (state) => {
      if (state.contact) {
        return state.contact.name;
      }
    },
    getTitle: (state) => {
      if (state.contact) {
        return state.contact.title;
      }
    },
    getPhoto: (state) => {
      if (state.contact) {
        return state.contact.photo;
      }
    },
    getEmail: (state) => {
      if (state.contact) {
        return state.contact.email;
      }
    },
    getWebsite: (state) => {
      if (state.contact) {
        return state.contact.website;
      }
    }
  }
});
