<template>
  <div>
    <p v-if="remainingTime">
      {{ remainingTime.days }} Jours {{ remainingTime.hours }} heures {{ remainingTime.minutes }}:{{ remainingTime.seconds }}
    </p>
    <p v-if="remainingTime">
      {{ remainingTime }}
    </p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'

export default {
  props: {
    endtime: {
      type: Date,
      required: true
    }
  },

  setup ({ endtime }, { emit }) {
    const remainingTime = ref(null)
    const timeinterval = ref(null)

    function getTimeRemaining (endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date())
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
      const days = Math.floor(total / (1000 * 60 * 60 * 24))

      return {
        total,
        days,
        hours,
        minutes,
        seconds
      }
    }

    const initializeClock = () => {
      timeinterval.value = setInterval(() => {
        if (remainingTime?.value?.total <= 0) {
          emit('ended')
        }
        remainingTime.value = getTimeRemaining(endtime)
      }, 1000)
    }

    onMounted(() => {
      initializeClock()
    })

    onUnmounted(() => {
      clearInterval(timeinterval.value)
    })

    return {
      remainingTime
    }
  }
}
</script>
