<template>
  <div class="flex flex-col items-center">
    <svg
      version="1.1"
      id="L1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      class="mx-auto my-5 block w-24 h-24"
    >
      <circle
        fill="none"
        stroke="#48caef"
        stroke-width="6"
        stroke-miterlimit="15"
        stroke-dasharray="14.2472,14.2472"
        cx="50"
        cy="50"
        r="47"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        fill="none"
        stroke="#48caef"
        stroke-width="1"
        stroke-miterlimit="10"
        stroke-dasharray="10,10"
        cx="50"
        cy="50"
        r="39"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="5s"
          from="0 50 50"
          to="-360 50 50"
          repeatCount="indefinite"
        />
      </circle>
      <g fill="#48caef">
        <rect x="30" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.1"
          />
        </rect>
        <rect x="40" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.2"
          />
        </rect>
        <rect x="50" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          />
        </rect>
        <rect x="60" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.4"
          />
        </rect>
        <rect x="70" y="35" width="5" height="30">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.5"
          />
        </rect>
      </g>
    </svg>
    <span class="text-cmt-blue animate-fade mb-2 text-lg">Loading . . .</span>
    <span class="text-cmt-blue"
      >If It's the first time you are using the app, please give it a couple of minutes to
      load the db.</span
    >
  </div>
</template>

<style scoped>
@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.animate-fade {
  animation: fadeInOut 2s infinite;
}
</style>
