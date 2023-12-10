<template>
  <div class="q-pa-md">
    <q-card class="q-mb-md">
      <q-card-section>
        <h2 class="text-h6">Gerador de QR Code Aleatório</h2>
        <div class="q-mb-md">
          <img v-if="showQR" :src="currentQR" alt="QR Code" style="max-width: 200px;">
        </div>
        <q-btn color="primary" @click="generateQRCode">Gerar QR Code</q-btn>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <h2 class="text-h6">Tempo Restante para Pagar</h2>
        <q-linear-progress
          :value="progress"
          :buffer-value="100"
          color="primary"
          :indeterminate="false"
          rounded
          track-color="grey-2"
          class="q-mt-md"
        />
        <div class="text-center q-mt-sm">{{ remainingTime }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrCodes: [
        'https://miro.medium.com/v2/resize:fit:640/0*zPG9dqz508rmRR70.',
        'https://s2.glbimg.com/Dtw-h4E5iGM7JmspNhnfW_16aOw=/s.glbimg.com/og/rg/f/original/2013/05/16/qr_code_291_218.jpg',
        'https://media.istockphoto.com/id/1402119108/pt/vetorial/qrcode-for-scan-product-scan-square-for-mobile-phone-bar-tag-scan-camera-phone-white-and.jpg?s=612x612&w=0&k=20&c=41UGpdy69DPxDSagwI8P6iNZR3RVnzfcHWx6NKMx27M='
      ],
      currentQR: '',
      showQR: false,
      timer: null,
      remainingTime: '00:30',
      progress: 100
    };
  },
  methods: {
    generateQRCode() {
      const randomIndex = Math.floor(Math.random() * this.qrCodes.length);
      this.currentQR = this.qrCodes[randomIndex];
      this.showQR = true;

      this.timer = setInterval(() => {
        const time = this.remainingTime.split(':');
        let minutes = parseInt(time[0]);
        let seconds = parseInt(time[1]);

        if (minutes === 0 && seconds === 0) {
          clearInterval(this.timer);
          this.showQR = false; // Oculta a imagem do QR Code
          return;
        }

        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        this.remainingTime = `${formattedMinutes}:${formattedSeconds}`;

        const totalSeconds = 30; // 5 minutos
        const remainingSeconds = (minutes * 60) + seconds;
        this.progress = Math.floor((remainingSeconds / totalSeconds) * 100);
      }, 1000);
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
</style>
