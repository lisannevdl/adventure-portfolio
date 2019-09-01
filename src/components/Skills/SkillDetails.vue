<template>
    <div class="col-md-12 col-lg-4 skill-details">
        <app-code-snippet :snippet="activeSkill.script" v-if="activeSkill.script"></app-code-snippet>
        <div class="icon-container" v-if="!activeSkill.script">
            <img :src="`/img/skills/${activeSkill.name.replace(/\s/g, '').toLowerCase()}.svg`" class="img-fluid">
        </div>
        <div class="skill-info">
            <div class="main-skill">
                <div class="skill-title d-flex">
                    <h3 class="flex-grow-1">{{ activeSkill.name }}</h3>
                    <div class="skill-type">{{ activeSkill.type }}</div>
                </div>
                <div class="skill-description">{{ activeSkill.desc }}</div>
                <div class="skill-exp d-flex" v-if="activeSkill.totalExp">
                    <div class="message flex-grow-1">Not enough xp</div>
                    <div class="points">{{ activeSkill.exp }} / {{ activeSkill.totalExp }}</div>
                </div>
            </div>
            <div class="upgrades" v-if="activeSkill.upgrades">
                <div class="upgrade" v-for="upgrade in activeSkill.upgrades" :key="upgrade.name">
                    <div class="skill-title d-flex">
                        <h5 class="flex-grow-1">{{ upgrade.name }}</h5>
                        <div class="skill-type">{{ upgrade.type }}</div>
                    </div>
                    <div class="skill-description">{{ upgrade.desc }}</div>
                    <div class="skill-exp d-flex" v-if="upgrade.totalExp">
                        <div class="message flex-grow-1">Not enough xp</div>
                        <div class="points">{{ upgrade.exp }} / {{ upgrade.totalExp }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import CodeSnippet from '@/components/Skills/CodeSnippet.vue'

export default {
    components: {
        appCodeSnippet: CodeSnippet,
    },
    props: {
        activeSkill: Object
    },
}
</script>