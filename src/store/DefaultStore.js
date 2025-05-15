// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', () => {
  // ==|== State ===================================================================================
  const contact = ref(null);
  const social = ref([]);
  const links = ref([]);
  const loading = ref({
    contact: false,
    social: false,
    links: false
  });
  const error = ref({
    contact: null,
    social: null,
    links: null
  });

  // ==|== Actions =================================================================================
  async function fetchContact() {
    loading.value.contact = true;
    error.value.contact = null;
    
    try {
      const response = await Service.getContact();
      contact.value = response?.[0] || null;
    } catch (err) {
      error.value.contact = err.message || 'Failed to fetch contact data';
      console.error(err);
    } finally {
      loading.value.contact = false;
    }
  }

  async function fetchSocial() {
    loading.value.social = true;
    error.value.social = null;
    
    try {
      const response = await Service.getSocial();
      social.value = response || [];
    } catch (err) {
      error.value.social = err.message || 'Failed to fetch social data';
      console.error(err);
    } finally {
      loading.value.social = false;
    }
  }

  async function fetchLinks() {
    loading.value.links = true;
    error.value.links = null;
    
    try {
      const response = await Service.getLinks();
      links.value = response || [];
    } catch (err) {
      error.value.links = err.message || 'Failed to fetch links data';
      console.error(err);
    } finally {
      loading.value.links = false;
    }
  }

  // ==|== Getters =================================================================================
  const getName = computed(() => contact.value?.name || '');
  const getTitle = computed(() => contact.value?.title || '');
  const getCompany = computed(() => contact.value?.company || '');
  const getPhoto = computed(() => contact.value?.photo || '');
  const getEmail = computed(() => contact.value?.email || '');
  const getWebsite = computed(() => contact.value?.website || '');
  const getScheduler = computed(() => contact.value?.schedule || '');
  
  const isLoading = computed(() => 
    loading.value.contact || loading.value.social || loading.value.links
  );

  // ==|== Return Store ============================================================================
  return {
    // State
    contact,
    social,
    links,
    loading,
    error,
    // Actions
    fetchContact,
    fetchSocial,
    fetchLinks,
    // Getters
    getName,
    getTitle,
    getCompany,
    getPhoto,
    getEmail,
    getWebsite,
    getScheduler,
    isLoading
  };
});
