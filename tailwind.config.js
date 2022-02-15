module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smo: { 'max': '212px' },
        smu: { 'max': '228px' },
        smk: { 'max': '254px' },
        sms: { 'max': '268px' },
        smq: { 'max': '302px' },
        smm: { 'max': '415px' },
        smb: { 'max': '450px' },
      },
      fontSize: {
        sms: '14px',
        smm: '14px',
        smb: '17px',
      }
    },
  },
  plugins: [],
}