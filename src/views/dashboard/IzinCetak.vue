<template>
  <div id="dashboard-content">
    
    <div class="text-right mb-4">{{ $store.state.today }}</div>
    <h6 class="font-weight-bold mb-2"><u>Pilih Kurikulum</u></h6>
    <p>
      Harap untuk pastikan profil telah dilengkapi. Kemudian pilih izin berdasarkan kurikulum dibawah ini :
    </p>
    <div class="mt-4"> 
      <ul>
        <li><router-link to="/user/izin-cetak/merdeka">Kurikulum Merdeka</router-link></li>
        <li><router-link to="/user/izin-cetak/k13">Kurikulum K-13</router-link></li>
      </ul>
    </div>
  </div>
</template>