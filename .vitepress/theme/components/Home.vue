<script setup lang="ts">
import VueMasteryModal from './VueMasteryModal.vue'
</script>

<template>
  <section id="hero">
    <h1 class="tagline">
      <span style='font-size: 120px'>Rust</span>
      <br />
      赋予
      <span class="accent">每个人构建</span>
      <br />可靠且高效软件能力的语言
    </h1>
    <p class="description">
      A language empowering everyone to build reliable and efficient software.
    </p>
    <p class="actions">
      <VueMasteryModal />
      <a class="get-started" href="/guide/introduction.html">
        Get Started
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
      <a class="setup" href="/guide/quick-start.html">Install</a>
    </p>
  </section>
  <section class="sm:container sm:mx-auto">
    <h2 class="text-32px my-10px">为什么选择 Rust?</h2>
    <div class="sm:grid sm:grid-cols-3 sm:gap-x-20px text-gray-600 dark:text-gray-300">
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <h3 class="text-center text-24px my-10px">高性能</h3>
        <p>Rust 速度惊人且内存利用率极高。由于没有运行时和垃圾回收，它能够胜任对性能要求特别高的服务，可以在嵌入式设备上运行，还能轻松和其他语言集成。</p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <h3 class="text-center text-24px my-10px">可靠性</h3>
        <p>Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，让您在编译期就能够消除各种各样的错误。</p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <h3 class="text-center text-24px my-10px">生产力</h3>
        <p>Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息， 还集成了一流的工具——包管理器和构建工具， 智能地自动补全和类型检验的多编辑器支持， 以及自动格式化代码等等。</p>
      </div>
    </div>
  </section>

  <section class="sm:container sm:mx-auto">
    <h2 class="text-32px my-10px">用 Rust 能干什么？</h2>
    <div class="sm:grid sm:grid-cols-4 sm:gap-x-10px text-gray-600 dark:text-gray-300">
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <svg class="mx-auto" height="72" viewBox="0 0 512 512" width="72">
          <g fill="#fff">
            <path d="m458.667 0h-405.334c-29.44.035-53.298 23.893-53.333 53.333v405.333c.035 29.441 23.893 53.299 53.333 53.334h405.333c29.441-.035 53.298-23.893 53.333-53.333v-405.334c-.034-29.44-23.892-53.298-53.332-53.333zm32 458.667c0 17.673-14.327 32-32 32h-405.334c-17.673 0-32-14.327-32-32v-405.334c0-17.673 14.327-32 32-32h405.333c17.673 0 32 14.327 32 32v405.334z"/>
            <path d="m42.667 85.333h426.667v21.333h-426.667z"/>
            <path d="m53.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m96 42.667h21.333v21.333h-21.333z"/>
            <path d="m437.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m448 128h-309.333v21.333h309.333v298.667h-384v-192h-21.333v192c0 11.782 9.551 21.333 21.333 21.333h384c11.782 0 21.333-9.551 21.333-21.333v-298.667c0-11.782-9.551-21.333-21.333-21.333z"/>
            <path d="m114.208 173.792-42.667-42.667-15.083 15.083 35.125 35.125-35.125 35.125 15.083 15.083 42.667-42.667c4.164-4.165 4.164-10.917 0-15.082z"/>
            <path d="m128 202.667h64v21.333h-64z"/>
          </g>
        </svg>
        <h3 class="text-center text-24px my-10px">命令行</h3>
        <p class="">使用 Rust 强大的生态系统快速实现命令行工具。Rust 可助您放心维护，轻松分发应用程序。</p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <svg class="mx-auto" height="72" viewBox="0 0 512 512" width="72">
          <g fill="#fff">
            <path d="m458.667 0h-405.334c-29.44.035-53.298 23.893-53.333 53.333v405.333c.035 29.441 23.893 53.299 53.333 53.334h405.333c29.441-.035 53.298-23.893 53.333-53.333v-405.334c-.034-29.44-23.892-53.298-53.332-53.333zm32 458.667c0 17.673-14.327 32-32 32h-405.334c-17.673 0-32-14.327-32-32v-405.334c0-17.673 14.327-32 32-32h405.333c17.673 0 32 14.327 32 32v405.334z"/>
            <path d="m42.667 85.333h426.667v21.333h-426.667z"/>
            <path d="m53.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m96 42.667h21.333v21.333h-21.333z"/>
            <path d="m437.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m448 128h-309.333v21.333h309.333v298.667h-384v-192h-21.333v192c0 11.782 9.551 21.333 21.333 21.333h384c11.782 0 21.333-9.551 21.333-21.333v-298.667c0-11.782-9.551-21.333-21.333-21.333z"/>
            <path d="m114.208 173.792-42.667-42.667-15.083 15.083 35.125 35.125-35.125 35.125 15.083 15.083 42.667-42.667c4.164-4.165 4.164-10.917 0-15.082z"/>
            <path d="m128 202.667h64v21.333h-64z"/>
          </g>
        </svg>
        <h3 class="text-center text-20px my-10px">WebAssembly</h3>
        <p class="">使用 Rust 来逐个增强您的 JavaScript 模块。发布到 npm，使用 webpack 打包，即可感受到惊人的速度提升。</p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <svg class="mx-auto" height="72" viewBox="0 0 512 512" width="72">
          <g fill="#fff">
            <path d="m458.667 0h-405.334c-29.44.035-53.298 23.893-53.333 53.333v405.333c.035 29.441 23.893 53.299 53.333 53.334h405.333c29.441-.035 53.298-23.893 53.333-53.333v-405.334c-.034-29.44-23.892-53.298-53.332-53.333zm32 458.667c0 17.673-14.327 32-32 32h-405.334c-17.673 0-32-14.327-32-32v-405.334c0-17.673 14.327-32 32-32h405.333c17.673 0 32 14.327 32 32v405.334z"/>
            <path d="m42.667 85.333h426.667v21.333h-426.667z"/>
            <path d="m53.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m96 42.667h21.333v21.333h-21.333z"/>
            <path d="m437.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m448 128h-309.333v21.333h309.333v298.667h-384v-192h-21.333v192c0 11.782 9.551 21.333 21.333 21.333h384c11.782 0 21.333-9.551 21.333-21.333v-298.667c0-11.782-9.551-21.333-21.333-21.333z"/>
            <path d="m114.208 173.792-42.667-42.667-15.083 15.083 35.125 35.125-35.125 35.125 15.083 15.083 42.667-42.667c4.164-4.165 4.164-10.917 0-15.082z"/>
            <path d="m128 202.667h64v21.333h-64z"/>
          </g>
        </svg>
        <h3 class="text-center text-24px my-10px">网络</h3>
        <p class="">可预见的性能，极小的资源占用，坚如磐石的可靠性。Rust 极其适合网络服务。</p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-10px p-20px bg-opacity-50">
        <svg class="mx-auto" height="72" viewBox="0 0 512 512" width="72">
          <g fill="#fff">
            <path d="m458.667 0h-405.334c-29.44.035-53.298 23.893-53.333 53.333v405.333c.035 29.441 23.893 53.299 53.333 53.334h405.333c29.441-.035 53.298-23.893 53.333-53.333v-405.334c-.034-29.44-23.892-53.298-53.332-53.333zm32 458.667c0 17.673-14.327 32-32 32h-405.334c-17.673 0-32-14.327-32-32v-405.334c0-17.673 14.327-32 32-32h405.333c17.673 0 32 14.327 32 32v405.334z"/>
            <path d="m42.667 85.333h426.667v21.333h-426.667z"/>
            <path d="m53.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m96 42.667h21.333v21.333h-21.333z"/>
            <path d="m437.333 42.667h21.333v21.333h-21.333z"/>
            <path d="m448 128h-309.333v21.333h309.333v298.667h-384v-192h-21.333v192c0 11.782 9.551 21.333 21.333 21.333h384c11.782 0 21.333-9.551 21.333-21.333v-298.667c0-11.782-9.551-21.333-21.333-21.333z"/>
            <path d="m114.208 173.792-42.667-42.667-15.083 15.083 35.125 35.125-35.125 35.125 15.083 15.083 42.667-42.667c4.164-4.165 4.164-10.917 0-15.082z"/>
            <path d="m128 202.667h64v21.333h-64z"/>
          </g>
        </svg>
        <h3 class="text-center text-24px my-10px">嵌入式</h3>
        <p class="text-gray-600 dark:text-gray-300">针对资源匮乏的设备？需要底层控制而又不失上层抽象的便利？Rust 包您满意！</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}
#can-i-do {
  max-width: 1024px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#can-i-do .can-i-do-header {
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 10px;
}
#can-i-do .vt-box{
  flex: 0 24%;
}

#can-i-do .vt-box svg{
  text-align: center;
  margin: 0 auto;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor {
    flex-direction: column;
  }
  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }
  #special-sponsor span {
    text-align: center !important;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 18px 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
