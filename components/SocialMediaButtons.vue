
<template>
  <section class="d-flex justify-space-evenly w-100">
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://linkedin.com/in/galvesmash"
        icon="fab fa-linkedin-in"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://github.com/Galvesmash"
        icon="fab fa-github"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://galvesmash.itch.io/"
        icon="fab fa-itch-io"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://www.behance.net/galvesmash"
        icon="fab fa-behance"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://www.twitch.tv/galvesmash"
        icon="fab fa-twitch"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        :color="isHovering ? 'primary' : 'secondary'"
        :style="{ transition: 'all .3s' }"
        density="compact"
        href="https://www.youtube.com/channel/UCnmUOQnQCA5cElOBEwt115w"
        icon="fab fa-youtube"
        target="_blank"
        variant="plain"
      />
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        density="compact"
        href="https://ko-fi.com/galvesmash"
        icon
        target="_blank"
        variant="plain"
      >
        <ko-fi-logo
          :color="isHovering ? 'primary' : 'secondary'"
          height="28"
          width="28"
        />  
      </v-btn>
    </v-hover>
  </section>
</template>

<style lang="scss">
  /* ko-fi icon */
  .fa-ko-fi::before {
    content: "\f0f4";
    display: inline-block;
    font-size: 1.1em;
    line-height: 0.45em;
    margin: -0.45em 0 0 -0.2em;
    overflow-y: hidden;
    padding-top: 0.45em;
  }
  .fa-ko-fi::after {
    color: #000;
    content: "\f004";
    font-size: 50%;
    font-weight: 900;
    margin: 0.5em 0 0 -2em;
    position: absolute;
  }
</style>
