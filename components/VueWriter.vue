<template>
  <div class="is-typed inline-block md:block">
    <slot />
    <span class="typed">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">{{
      caret == "cursor" ? "|" : "_"
    }}</span>
  </div>
</template>

<script>
// Source https://github.com/quelchx/vue-writer
// For some reason, build would get stuck using original package
export default {
  name: "VueWriter",
  props: {
    array: {
      type: Array,
      required: true,
    },
    eraseSpeed: {
      type: Number,
      default: 100,
    },
    typeSpeed: {
      type: Number,
      default: 200,
    },
    delay: {
      type: Number,
      default: 2000,
    },
    intervals: {
      type: Number,
      default: 500,
    },
    start: {
      type: Number,
      default: 0,
    },
    caret: {
      type: String,
      default: "cursor",
    },
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
      timeoutId: null, // Store timeout ID
    };
  },
  methods: {
    typewriter() {
      const currentString = this.array[this.arrayIndex];
      const fullLength = Array.from(currentString).length;
      if (this.charIndex < fullLength) {
        if (!this.typeStatus) this.typeStatus = true;
        const characters = Array.from(currentString);
        this.typeValue = characters.slice(0, this.charIndex + 1).join("");
        this.charIndex++;
        this.timeoutId = setTimeout(this.typewriter, this.typeSpeed);
      } else {
        this.typeStatus = false;
        this.timeoutId = setTimeout(this.eraser, this.delay);
      }
    },
    eraser() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        const currentString = this.array[this.arrayIndex];
        const characters = Array.from(currentString);
        this.typeValue = characters.slice(0, this.charIndex - 1).join("");
        this.charIndex--;
        this.timeoutId = setTimeout(this.eraser, this.eraseSpeed);
      } else {
        this.typeStatus = false;
        this.arrayIndex = (this.arrayIndex + 1) % this.array.length;
        this.timeoutId = setTimeout(this.typewriter, this.intervals);
      }
    },
  },
  created() {
    this.timeoutId = setTimeout(this.typewriter, this.start);
  },
  beforeUnmount() {
    // Clear the timeout when the component is about to unmount
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  },
};
</script>

<style lang="scss">
.is-typed span.cursor {
  animation: 1.5s blink step-end infinite;

  &.typing {
    animation: none;
  }
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: inherit;
  }
}
</style>
