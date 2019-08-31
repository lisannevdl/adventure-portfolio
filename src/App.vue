<template>
  <main class="home">
    <app-banner></app-banner>
    <app-skills></app-skills>
    <app-story></app-story>
    <app-training-grounds></app-training-grounds>
    <app-guilds></app-guilds>
    <app-quests></app-quests>
    <app-chat></app-chat>
  </main>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Skills from '@/components/Skills.vue'
import Waterfall from '@/components/Waterfall.vue'
import Story from '@/components/Story.vue'
import TrainingGrounds from '@/components/TrainingGrounds.vue'
import Guilds from '@/components/Guilds.vue'
import Quests from '@/components/Quests.vue'
import Chat from '@/components/Chat.vue'


export default {
  name: 'home',
  components: {
    appBanner: Banner,
    appSkills: Skills,
    appWaterfall: Waterfall,
    appStory: Story,
    appTrainingGrounds: TrainingGrounds,
    appGuilds: Guilds,
    appQuests: Quests,
    appChat: Chat
  }
}
</script>

