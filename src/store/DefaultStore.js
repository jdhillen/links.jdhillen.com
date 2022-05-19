// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', {

  // ==|== State ===================================================================================
  state: () => {
    return {
      contact: undefined,
    }
  },

  // ==|== Actions =================================================================================
  actions: {
    async fetchContact() {
      Service.getContact().then((response) => {
        this.contact = response.data;
      })
    }
  },


  // ==|== Getters =================================================================================
  getters: {
    getPhoto: (state) => {
      if (state.contact) {
        return state.contact.photo
      }
    },
    getTitle: (state) => {
      if (state.contact) {
        return state.contact.title
      }
    }
  },

})

