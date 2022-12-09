// Styles
import "@mdi/font/css/materialdesignicons.css";
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

// Composables
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
