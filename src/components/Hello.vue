<template>
  <div>
    <div class="hello-world-content">Hello {{ world }}</div>
    <div>
      <div class="ver-gap count-content">
        <transition name="slide-fade" mode="out-in">
          <div :key="count">{{ count }}</div>
        </transition>
      </div>
      <div class="ver-gap">
        <button @click="count++">+1</button>
        <button @click="count--">-1</button>
        <button @click="count=0">0</button>
        <button @click="count*=2">×2</button>
        <button @click="count/=2">÷2</button>
        <button @click="count=-count">±</button>
        <input v-model="count" />
      </div>
      <div class="ver-gap">
        <img :src="imgSrc" />
      </div>
    </div>
  </div>
</template>

<script>
import img from '../img/view.jpeg'

export default {
  data() {
    return {
      imgSrc: img,
      world: "Vue and Webpack",
      count: 0
    };
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.ver-gap {
  transform: translateY();
  margin-top: 5px;
}

.hello-world-content {
  padding: 10px;
  font-size: 24px;
  background-color: brown;
  color: white;
  text-align: center;
}

.count-content {
  padding: 5px;
  font-size: 24px;
  background-color: #d19666;
  border-radius: 8px;
  text-align: center;
}
</style>
