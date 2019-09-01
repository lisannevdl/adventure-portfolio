<template>
    <div class="guild">
        <div class="guild-header d-flex justify-content-center">
            <div class="guild-logo"><img :src="`/img/guilds/${guild.logo}.png`"></div>
            <div class="guild-name">
                <div class="name">{{ guild.name }}</div>
                <div class="location">{{ guild.location }}</div>
            </div>
            <div class="guild-info">
                <div class="members"><img src="../assets/images/account-group.svg"> {{ guild.members }} members</div>
                <div class="founded">Founded in {{ guild.founded }}</div>
            </div>
        </div>
        <div class="member-info d-flex justify-content-center">
            <div class="title">Guild rank</div>
            <div class="guild-rank">{{ guild.rank }}</div>
            <div class="title">Active during</div>
            <div class="guild-active">{{ guild.active }}</div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="description">
                    <div class="title">Guild description</div>
                    <div class="desc">{{ guild.description }}</div>
                </div>
                <div class="exp">
                    <div class="title">Experience earned</div>
                    <img v-for="exp in guild.exp" :src="`/img/skills/${exp.toLowerCase()}.svg`" :key="exp">
                </div>
            </div>
            <div class="col-md-6 achievements">
                <div class="title">Achievements</div>
                <ul>
                    <li v-for="achievement in guild.achievements" :key="achievement">{{ achievement }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        guild: Object
    }
}
</script>