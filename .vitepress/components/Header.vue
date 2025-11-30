<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  /** 自定义 Logo 图片地址（如 /logo.png 或 https://...）；传入则优先生效 */
  logoSrc?: string
  /** 自定义图片 alt 文本 */
  logoAlt?: string
}>()

const { theme, site } = useData()

// 兼容 theme.logo 或 site.themeConfig.logo；可能为 string 或 { light, dark }
const themeLogo = computed(() => (theme.value as any)?.logo ?? (site.value as any)?.themeConfig?.logo)

const resolvedLogoSrc = computed<string | undefined>(() => {
  if (props.logoSrc) return props.logoSrc
  const v = themeLogo.value
  if (!v) return undefined
  if (typeof v === 'string') return v
  if (typeof v === 'object') {
    // 兼容 { light, dark } 结构：默认取 light；后续可扩展根据配色切换
    if (typeof v.light === 'string') return v.light
    if (typeof v.src === 'string') return v.src
    if (typeof v.dark === 'string') return v.dark
  }
  return undefined
})

const resolvedLogoAlt = computed(() => props.logoAlt ?? 'logo')
</script>

<template>
  <header>
    <p>
      欢迎加入Ac-Wiki
      <Tip copy>
        <strong>860675581</strong>
      </Tip>
      项目修缮中，可联系群管理员贡献内容。
    </p>
    <Logo :src="resolvedLogoSrc" :alt="resolvedLogoAlt" class="header-logo" />
  </header>
</template>

<style scoped>
header {
  position: relative;
  margin-block: -1em 2em;
  color: var(--vp-c-text-3);
}

/* stylelint-disable-next-line media-feature-range-notation */
@media (max-width: 768px) {
  header {
    font-size: 0.875em;
  }
}

strong {
  font-size: 1.2em;
}

.header-logo {
  position: absolute;
  top: 0;
  right: 0;
  height: 5em;
  color: var(--vp-c-divider);
  z-index: -1;
}
</style>
