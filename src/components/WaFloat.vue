<template>
  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="wa-btn" aria-label="WhatsApp Us">
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 2C8.27 2 2 8.27 2 16c0 2.47.67 4.78 1.83 6.78L2 30l7.43-1.79A14 14 0 0016 30c7.73 0 14-6.27 14-14S23.73 2 16 2z" fill="white"/>
      <path d="M21.8 18.95c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H11c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
    </svg>
  </a>
</template>
<style scoped>
.wa-btn {
  position:fixed; bottom:28px; right:28px; z-index:200;
  width:54px; height:54px; border-radius:50%; background:#25D366;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 4px 24px rgba(37,211,102,.4);
  transition:transform .25s var(--ease-out), box-shadow .25s;
}
.wa-btn:hover { transform:scale(1.1); box-shadow:0 8px 32px rgba(37,211,102,.5); }
.wa-btn svg { width:26px; height:26px; }
</style>
