/* ===== PENGATURAN WEB (edit file ini saja) ===== */
window.APP_CONFIG = {
  // URL Web App Google Apps Script (berakhiran /exec). Kosongkan jika tidak dipakai.
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbw_khiKLk62Uqxt2d972EGnbsDye7QxUx2IybFxjKD4XtigPWcTUnIKzDu0rCUCvrfMiw/exec',
  // Kata rahasia, harus sama dengan SECRET di Apps Script.
  SECRET: 'buka',
  // Efek suara (file ada di folder sounds). Tukar nama file di sini jika ingin menukar suaranya.
  SOUNDS: {
    click: 'sounds/Click_stereo_ogg.mp3',   // klik tombol
    menu: 'sounds/Release_ogg.mp3',         // klik menu bawah
    refresh: 'sounds/Snes_pop_ogg.mp3'      // klik Segarkan / Cek Status
  },
  // Status Featured Server: 'on' = normal, 'locked' = terkunci (perlu PIN), 'off' = dimatikan.
  FEATURED_MODE: 'locked',
  // PIN untuk mode 'locked': tepat 4 digit angka. (Catatan: PIN di sini bisa dibaca siapa pun yang membuka file ini.)
  FEATURED_PIN: '3636',
  // Daftar Featured Server. Kosong = tampil "Coming Soon!".
  // Contoh isi: { name: 'Nama Server', ip: 'play.contoh.com', port: '19132', desc: 'Deskripsi singkat', pin: true },
  // pin: true = server tampil paling atas dengan tanda PIN. Hapus atau isi false jika tidak dipin.
  FEATURED_SERVERS: [
{ name: 'Wasil SMP', ip: 'wasil.my.id', port: '19297', desc: 'Anarchy!', pin: true },
    { name: 'Rechade SMP', ip: 'nibelung.arqonara.com', port: '25451', desc: 'Survival'},
    { name: 'Tanahlama SMP', ip: 'tanahlama.mineidhost.com', port: '19137', desc: 'Survival'},
    { name: 'Farnexus', ip: 'farnexus.my.id', port: '30065', desc: 'Survival-Ekonomi'},
    { name: 'Entropy SMP', ip: 'pierro.arqonara.com', port: '25356', desc: 'Anarchy-Ekonomi'},
    { name: 'GHOST SMP', ip: 'premium-8.alstore.space', port: '21002', desc: 'Survival'},
    { name: 'Vael SMP', ip: 'premium-4.alstore.space', port: '20001', desc: 'Survival'}
  ]
};
