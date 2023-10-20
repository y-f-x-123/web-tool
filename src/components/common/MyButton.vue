<template>
  <button class="btn-donate">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn-donate {
  --clr-font-main: hsla(0 0% 20% / 100);
  --btn-bg-1: hsla(194 100% 69% / 1);
  --btn-bg-2: hsla(217 100% 56% / 1);
  --btn-bg-color: hsla(360 100% 100% / 1);
  --radii: 0.5em;
  cursor: pointer;
  padding: 0 1em;
  line-height: 0.8em;
  min-width: 80px;
  min-height: 20px;
  font-size: var(--size, 0.9rem);
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-weight: 500;
  transition: 0.4s;
  animation: mymove 1.5s linear alternate infinite;
  background-size: 280% auto;
  background-image: linear-gradient(
    325deg,
    var(--btn-bg-2) 0%,
    var(--btn-bg-1) 55%,
    var(--btn-bg-2) 90%
  );
  border: none;
  border-radius: var(--radii);
  color: var(--btn-bg-color);
  box-shadow: 0px 0px 20px rgba(71, 184, 255, 0.5),
    0px 5px 5px -1px rgba(58, 125, 233, 0.25),
    inset 4px 4px 8px rgba(175, 230, 255, 0.5),
    inset -4px -4px 8px rgba(19, 95, 216, 0.35);
}

// .btn-donate:hover {
//   background-position: right top;
// }

@keyframes mymove {
  0% {
    background-position: auto auto;
  }
  100% {
    background-position: right top;
  }
}

.btn-donate:is(:focus, :focus-visible, :active) {
  outline: none;
  transform: scale(1.1);
}

// @media (prefers-reduced-motion: reduce) {
//   .btn-donate {
//     transition: linear;
//   }
// }
</style>
