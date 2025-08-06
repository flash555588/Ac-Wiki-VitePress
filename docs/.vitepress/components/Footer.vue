<!-- 
  Footer.vue - 页脚组件
  功能：显示网站页脚信息
  包含：免责声明、版权信息、许可证链接
-->
<template>
  <footer class="doc-footer">
    <div class="footer-content">
      <p class="footer-text">
         <!-- 免责声明文本 -->
        内容由学生编写。世界千变万化，过往经验不保证完全可用，唯有随机应变的大脑才能靠得住。
      </p>
      <div class="footer-links">
        <a href="/contribute" class="footer-link">贡献内容</a>
        <span class="separator">|</span>
        <a href="/about" class="footer-link">关于我们</a>
        <span class="separator">|</span>
        <a href="https://github.com/ac-wiki/ac-wiki" class="footer-link" target="_blank">
          <Icon icon="mdi:github" class="github-icon" />
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.doc-footer {
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.footer-content {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.footer-text {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--vp-c-brand-dark);
}

.separator {
  color: var(--vp-c-divider);
  font-size: 0.8rem;
}

.github-icon {
  font-size: 1.1em;
}

@media (max-width: 640px) {
  .footer-links {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .separator {
    display: none;
  }
}
</style> 