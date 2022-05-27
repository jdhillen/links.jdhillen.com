// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', {
  // ==|== State ===================================================================================
  state: () => {
    return {
      contact: {},
      social: {},
      links: {}
    };
  },

  // ==|== Actions =================================================================================
  actions: {
    fetchContact() {
      Service.getContact().then((response) => {
        this.contact = response.data;
      });
    },
    fetchSocial() {
      Service.getSocial().then((response) => {
        this.social = response.data;
      });
    },
    fetchLinks() {
      Service.getLinks().then((response) => {
        this.links = response.data;
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
