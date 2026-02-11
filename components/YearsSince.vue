<script setup>
import { computed, defineProps } from "vue";

let props = defineProps({
  since: { type: String }, // Date string
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

let yearsSince = computed(() => {
  const diffInMs = new Date() - new Date(props.since);
  const diffInYears = new Date(Date.parse(0) + diffInMs).getFullYear() - 2000;
  return diffInYears;
});
let ordinalSuffix = computed(() => (props.ordinal ? asOrdinal(yearsSince.value) : ""));
</script>

<template>
  <span>{{ yearsSince }}{{ ordinalSuffix }}</span>
</template>
