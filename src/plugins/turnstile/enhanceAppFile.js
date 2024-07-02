import Vue from 'vue'

export default ({ router }) => {
  Vue.component('Turnstile', {
    render(h) {
      return h('div', { attrs: { id: 'turnstile' } })
    },
    mounted() {
      const siteKey = '0x4AAAAAAAc1YSgRTYGHligw'; // 将 YOUR_SITE_KEY 替换为您的实际 Site Key
      const turnstileScript = document.createElement('script');
      turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      turnstileScript.async = true;
      turnstileScript.onload = () => {
        window.turnstile.render('#turnstile', { sitekey: siteKey });
      };
      document.body.appendChild(turnstileScript);
    }
  });

  router.afterEach(() => {
    if (window.turnstile) {
      window.turnstile.render('#turnstile', { sitekey: 'YOUR_SITE_KEY' });
    }
  });
}
