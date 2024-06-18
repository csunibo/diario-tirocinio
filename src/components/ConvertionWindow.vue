<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Activity } from '@/types'
import CodeBox from './CodeBox.vue'

export default defineComponent({
  props: {
    activities: {
      type: Object as PropType<Activity[]>,
      required: true
    }
  },
  methods: {
    toSimpleJson(): string {
      return JSON.stringify(this.activities, ['Title', 'Duration', 'Description'], '\t')
    },
    toLatex(): string {
      const head = `\\begin{tabularx}{0.8\\linewidth} { 
| >{\\raggedright\\arraybackslash}X 
| >{\\centering\\arraybackslash}X 
| >{\\raggedleft\\arraybackslash}X | }\n`

      const foot = '\\end{tabularx}\n'

      let res = head
      this.activities.forEach((x) => {
        res += `${x.Title}\t& ${x.Description}\t& ${x.Duration} \\\\\n`
      })

      return res + foot
    }
  },
  components: { CodeBox }
})
</script>

<template>
  <div class="h-full">
    <div class="bg-csunibo-light-blu rounded-b-lg p-12">
      <h1 class="font-bold m-b-2 text-lg mb-2">JSON:</h1>
      <CodeBox>
        {{ toSimpleJson() }}
      </CodeBox>
      <h1 class="font-bold m-b-2 text-lg mb-2 mt-5">LaTeX:</h1>
      <CodeBox>
        {{ toLatex() }}
      </CodeBox>
    </div>
  </div>
</template>

<style></style>
