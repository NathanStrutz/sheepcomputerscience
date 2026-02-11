<script setup>
import { computed, defineProps } from "vue";

let props = defineProps({
  since: { type: Number },
  ordinal: { type: Boolean, default: false },
});

const asOrdinal = (n) => {
  let ord = "th";

  if (n % 10 === 1 && n % 100 !== 11) {
    ord = "st";
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = "nd";
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = "rd";
  }

  return ord;
};

let yearsSince = computed(() => new Date().getFullYear() - props.since);
let ordinalSuffix = computed(() => (props.ordinal && asOrdinal(yearsSince.value)) || "");
</script>

<template>
  <span>{{ yearsSince }}{{ ordinalSuffix }}</span>
</template>
