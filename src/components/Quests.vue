<template>
    <section class="quests">
        <div class="container">
            <header>
                <h2>Quests</h2>
                <h1>Great accomplishments</h1>
                <h6>A small selection of distinctive, proud and sometimes simply beautiful projects I've succesfully conquered</h6>
            </header>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="quest nested-quest" :class="quest.col" v-for="quest in quests.slice(0,3)" :key="quest.name" @click="toggleQuest(quest)">
                            <img :src="`/img/quests/${quest.thumb}.jpg`" class="img-fluid">
                            <div class="content d-flex align-items-center">
                                <div class="content-text">
                                    <div class="icon" :class="`icon-${quest.info.Type.replace(/\s/g, '')}`"></div>
                                    <div class="type">{{ quest.info.Type }}</div>
                                    <div class="name">{{ quest.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
                <div class="quest" :class="quest.col" v-for="quest in quests.slice(3,8)" :key="quest.name"  @click="toggleQuest(quest)">
                    <img :src="`/img/quests/${quest.thumb}.jpg`" class="img-fluid">
                    <div class="content d-flex align-items-center">
                        <div class="content-text">
                            <div class="icon" :class="`icon-${quest.info.Type.replace(/\s/g, '')}`"></div>
                            <div class="type">{{ quest.info.Type }}</div>
                            <div class="name">{{ quest.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" :class="{ show : activeQuest }">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document" v-if="activeQuest">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ activeQuest.name }}</h5>
                        <a class="btn btn-secondary" v-if="activeQuest.link" :href="activeQuest.link" target="_blank">Preview</a>
                    </div>
                    <img :src="`/img/quests/${activeQuest.image}`" class="img-fluid">
                    <div class="modal-body">
                        <div class="notice" v-if="activeQuest.notice">{{ activeQuest.notice }}</div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="description">
                                    <div class="title">Description</div>
                                    {{ activeQuest.description }}
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="title">Details</div>
                                <div class="quest-info d-flex" v-for="(info, key, index) in activeQuest.info" :key="index">
                                    <div class="label">{{ key }}:</div>
                                    <div class="info">{{ info }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="close" aria-label="Close" @click="closeQuest">
                        <div class="leftright"></div>
                        <div class="rightleft"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeQuest: null,
            quests: [
                {
                    name: 'Infinite Backlog',
                    thumb: 'ib',
                    image: 'ib.png',
                    col: 'col-md-12',
                    link: 'https://www.infinitebacklog.nl',
                    notice: 'In active development - currently in its pre-alpha stage getting ready to be tested by select users',
                    description: 'A social gaming website to track game collection, achievements and trophies. Fill your game collection with a huge database of games to stay on top of your gaming backlog and link your profile to gaming platforms to track statistics.',
                    info: {
                        Questgiver: 'Me',
                        Guild: 'Phoenix Designs',
                        Type: 'Web App',
                        Year: '2019'
                    }
                },
                {
                    name: 'Kentalis Leeshuis',
                    thumb: 'kentalis',
                    image: 'kentalis.png',
                    col: 'col-md-6',
                    link: 'http://www.kentalisleeshuis.nl/leeshuis/',
                    description: 'An interactive website that gives parents tips and ideas about activities to stimulate the reading development of children with an auditory disability. Using this website parents can help their kids with reading development in a fun and playful way.',
                    info: {
                        Questgiver: 'Koninklijke Kentalis',
                        Guild: 'BasisOnline',
                        Type: 'Website',
                        Year: '2015'
                    }
                },
                {
                    name: 'Plaza',
                    thumb: 'plaza',
                    image: 'plaza.png',
                    col: 'col-md-6',
                    description: 'A responsive management environment for the BasisOnline Ouderportaal and Intranet with a completely new and improved intuitive UI and faster routing to key functionalities.',
                    info: {
                        Questgiver: 'BasisOnline',
                        Guild: 'BasisOnline',
                        Type: 'Web App',
                        Year: '2018'
                    }
                },
                {
                    name: 'Ouderportaal App',
                    thumb: 'ouderportaal',
                    image: 'ouderportaal.png',
                    col: 'col-md-4',
                    link: 'https://apps.apple.com/nl/app/basisonline-ouderportaal/id952670599',
                    description: 'An intuitive, fast, cross-platform hybrid mobile app to support the BasisOnline Ouderportaal that facilitates two-way school-parent communication. Depending on the login profile, the app has various functionalities per module for parent or teacher.',
                    info: {
                        Questgiver: 'BasisOnline',
                        Guild: 'BasisOnline',
                        Type: 'Mobile App',
                        Year: '2017'
                    }
                },
                {
                    name: 'Kievietschool',
                    year: '2018',
                    thumb: 'kieviet',
                    image: 'kieviet.png',
                    description: 'Along with a fresh identity and some quirky birds, this new responsive website highlights the way the school supports its students in in the learning process, with all information for (new) parents are available at a glance.',
                    link: 'http://www.kievietschool.nl/',
                    col: 'col-md-6',
                    info: {
                        Questgiver: 'De Kievietschool',
                        Guild: 'BasisOnline',
                        Type: 'Website',
                        Year: '2017'
                    }
                },
                {
                    name: 'Insite',
                    year: '2014 - 2015',
                    thumb: 'insite',
                    image: 'insite.png',
                    col: 'col-md-6',
                    description: 'A CRM and project management tool developed by and for Phoenix Designs. It\'s mainly used to keep track of all customer information and projects as well as the development of our products and its inevitable bugs.',
                    info: {
                        Questgiver: 'Phoenix Designs',
                        Guild: 'Phoenix Designs',
                        Type: 'Web App',
                        Year: '2017'
                    }
                }
            ]
        }
    },
    mounted() {
        document.addEventListener("keydown", (e) => {
            if (this.activeQuest && e.keyCode == 27) {
                this.closeQuest();
            }
        });
    },
    methods: {
        toggleQuest(quest) {
            this.activeQuest = quest;
            document.body.classList.add("modal-open");
        },
        closeQuest() {
            this.activeQuest = null;
            document.body.classList.remove("modal-open");
        }
     }
}
</script>