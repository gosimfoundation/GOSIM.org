<template>
  <div class="flex items-start gap-2">
    <img
        src="@assets/images/checkmark.svg"
        loading="lazy"
        alt=""
        class="w-5 h-5"
    />
    <div>
      <strong v-if="beforeColon">{{ beforeColon }}</strong><span v-if="afterColon">: {{ afterColon }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventFeatureItem",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    beforeColon() {
      return this.text.split(":")[0];
    },
    afterColon() {
      const parts = this.text.split(":");
      return parts.length > 1 ? parts.slice(1).join(":").trim() : "";
    },
  },
};
</script>

<style scoped>
</style>