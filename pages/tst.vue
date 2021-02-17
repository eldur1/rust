<template>
  <div>
    <a-timer-count :endtime="endtime" @ended="resetTimer" />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup () {
    const endtime = ref(null)

    const getNextDayOfWeek = function (day, hour = 0, minutes = 0) {
      // The current day
      const date = new Date()
      const now = date.getDay()

      // Find the difference between the current day and the one you want
      // If it's the same day as today (or a negative number), jump to the next week
      let diff = day - now
      diff = diff < 1 ? 7 + diff : diff

      // Get the timestamp for the desired day
      const nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff)

      // Get the next day
      const resultDate = new Date(nextDayTimestamp)
      resultDate.setHours(hour, minutes)
      return resultDate
    }

    function resetTimer () {
      endtime.value = getNextDayOfWeek(5, 18)
    }

    endtime.value = getNextDayOfWeek(5, 18)

    return {
      endtime,
      resetTimer
    }
  }
}
</script>
