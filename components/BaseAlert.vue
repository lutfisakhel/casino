<template>
  <div :class="[variant, 'base-alert p-4 mb-4 border-l-4']">
    <div class="flex">
      <div class="flex flex-shrink-0 icon-wrapper">
        <slot name="icon" v-if="$slots.icon"></slot>
        <Icon name="lucide:check-circle" v-else-if="variant === 'success'" />
        <Icon name="lucide:info" v-else-if="variant === 'info'" />
        <Icon name="lucide:alert-triangle" v-else-if="variant === 'warning'" />
        <Icon name="lucide:alert-octagon" v-else-if="variant === 'danger'" />
      </div>
      <div class="ml-3 leading-5 text-sm">
        <!-- show h3 only if slot #heading is not null -->
        <h3 class="text-base font-medium mt-0.5" :class="{ 'mb-2': $slots.default }" v-if="$slots.heading">
          <slot name="heading"></slot>
        </h3>

        <slot></slot>

        <p class="mt-6 text-sm opacity-80" v-if="$slots.subline">
          <slot name="subline"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// See template https://tailwindui.com/components/application-ui/feedback/alerts
export default {
  props: {
    variant: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.base-alert {
  a {
    @apply font-medium underline transition duration-150 ease-in-out focus:outline-none;
  }

  svg {
    @apply w-6 h-6;
  }

  &.success {
    @apply text-green-700 border-green-400 bg-green-100;

    .icon-wrapper {
      @apply text-green-400;
    }

    h3 {
      @apply text-green-800;
    }

    a {
      @apply text-green-700;

      &:hover {
        @apply text-green-600;
      }
    }
  }

  &.info {
    @apply text-blue-700 border-blue-400 bg-blue-100;

    .icon-wrapper {
      @apply text-blue-400;
    }

    h3 {
      @apply text-blue-800;
    }

    a {
      @apply text-blue-700;

      &:hover {
        @apply text-blue-600;
      }
    }
  }

  &.warning {
    @apply text-yellow-700 border-yellow-300 bg-yellow-100;

    .icon-wrapper {
      @apply text-yellow-400;
    }

    h3 {
      @apply text-yellow-800;
    }

    a {
      @apply text-yellow-700;

      &:hover {
        @apply text-yellow-600;
      }
    }
  }

  &.danger {
    @apply text-red-700 border-red-400 bg-red-100;

    .icon-wrapper {
      @apply text-red-400;
    }

    h3 {
      @apply text-red-800;
    }

    a {
      @apply text-red-700;

      &:hover {
        @apply text-red-600;
      }
    }
  }
}
</style>
