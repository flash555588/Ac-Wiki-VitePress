<template>
  <div class="not-found">
    <div class="not-found-content">
      <div class="not-found-icon">
        <Icon icon="mdi:emoticon-sad-outline" />
      </div>
      <h1 class="not-found-title">页面未找到</h1>
      <p class="not-found-description">
        抱歉，您访问的页面不存在或已被移动。
      </p>
      <div class="not-found-actions">
        <a href="/" class="not-found-button primary">
          <Icon icon="mdi:home" />
          返回首页
        </a>
        <a href="/overview" class="not-found-button">
          <Icon icon="mdi:book-open-variant" />
          浏览内容
        </a>
      </div>
      <div class="not-found-help">
        <p>如果您认为这是一个错误，请：</p>
        <ul>
          <li>
            <a href="https://github.com/ac-wiki/ac-wiki/issues" target="_blank">
              <Icon icon="mdi:github" />
              在 GitHub 上报告问题
            </a>
          </li>
          <li>
            <a href="/contribute">
              <Icon icon="mdi:pencil" />
              帮助我们完善内容
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.not-found-icon {
  font-size: 4rem;
  color: var(--vp-c-text-3);
  margin-bottom: 1rem;
}

.not-found-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.not-found-description {
  color: var(--vp-c-text-2);
  margin: 0 0 2rem 0;
  font-size: 1.1rem;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.not-found-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.not-found-button.primary {
  background: var(--vp-c-brand);
  color: white;
}

.not-found-button.primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-1px);
}

.not-found-button:not(.primary) {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.not-found-button:not(.primary):hover {
  background: var(--vp-c-bg-soft-up);
  transform: translateY(-1px);
}

.not-found-help {
  text-align: left;
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.not-found-help p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.not-found-help ul {
  margin: 0;
  padding-left: 1.5rem;
  list-style: none;
}

.not-found-help li {
  margin-bottom: 0.5rem;
}

.not-found-help a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.not-found-help a:hover {
  color: var(--vp-c-brand-dark);
}

@media (max-width: 640px) {
  .not-found-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .not-found-button {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}
</style> 