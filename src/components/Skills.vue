<template>
    <section class="skills">
        <div class="container">
            <header>
                <h2>Skill tree</h2>
                <h1>Creative Developer</h1>
                <h6>A balance between creative and analytical qualities with emphasis on user-centric practices</h6>
            </header>
            <div class="row">
                <div class="col-md-12 col-lg-8 skill-trees">
                    <div class="skill-tree">
                        <nav class="skill-tree-nav">
                            <div class="skill-nav front-end" :class="{ active : activeTree === 'frontend'}" @click="changeTree('frontend')">Front-end</div>
                            <div class="skill-nav design" :class="{ active : activeTree === 'design'}" @click="changeTree('design')">Design</div>
                        </nav>
                        <div class="skill-row d-flex" v-for="(skillrow, index) in skills[activeTree]" :key="index">
                            <div class="skill-icon" :class="[{ active: activeSkill === skill, unearned: !skill.earned}, `skill-${skill.name.toLowerCase().replace(/\s/g, '')}` ]" v-for="skill in skillrow" :key="skill.name" @mouseover="activeSkill = skill">
                                <img :src="`/img/skills/${skill.name.replace(/\s/g, '').toLowerCase()}.svg`" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
                <app-skill-details :activeSkill="activeSkill"></app-skill-details>
            </div>
        </div>
    </section>
</template>

<script>
import SkillDetails from '@/components/Skills/SkillDetails.vue'
import skills from '../data/skills';

export default {
    components: {
        appSkillDetails: SkillDetails
    },
    data() {
        return {
            skills: null,
            activeSkill: null,
            activeTree: 'frontend'
        }
    },
    created() {
        this.skills = skills;
        this.activeSkill = skills.frontend[0][0];
    },
    methods: {
        changeTree(newTree) {
            if (newTree != this.activeTree) {
                this.activeTree = newTree;
                this.activeSkill = skills[newTree][0][0];
            }
        }
    }
}
</script>