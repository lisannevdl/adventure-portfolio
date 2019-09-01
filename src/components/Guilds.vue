<template>
    <section class="guilds">
        <div class="container">
            <header>
                <h2>Guilds</h2>
                <h1>Gaining experience</h1>
                <h6>A strong team will complement your strengths and make up for your weaknesses, enabling you to overcome any challenge</h6>
            </header>
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="timeline">
                        <div class="timeline-active" :class="guild.logo" :style="guild.style" v-if="guild"></div>
                        <div class="event" :class="{ active : guild === guilds[0] || guild === guilds[2] }">Now</div>
                        <div class="event" v-for="event in guilds" :key="event.date" 
                        :style="event.timelineSpot" :class="{ active : event === guild }"
                        @click="guild = event">{{ event.date }}</div>
                    </div>
                    <app-guild v-if="guild" :guild="guild"></app-guild>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Guild from '@/components/Guild.vue'

export default {
    components: {
        appGuild: Guild
    },
    data() {
        return {
            guild: null,
            guilds: [
                {
                    date: '2018',
                    timelineSpot: 'left: 10%;',
                    name: 'Langdon Systems',
                    logo: 'langdon',
                    location: 'Eindhoven',
                    members: '8',
                    founded: '2013',
                    rank: 'Front-end Developer',
                    active: 'August 2018 - Present',
                    description: 'Langdon Systems specializes in Customs Duty Management Systems, helping customers with in- and export through easy-to-use software, making each declaration a breeze.',
                    achievements: [
                        'Developed a new PWA from the ground up using Polymer and vanilla web components',
                        'Added multiple new functionalities to the existing AngularJS application',
                        'Helped organize and create the content of a front-end mob programming meet-up',
                        'Fixed bugs that were found during QA & UA testing',
                        'Designed and developed the new Langdon website'
                    ],
                    exp: ['HTML', 'CSS', 'Javascript', 'AngularJS', 'Bootstrap', 'SASS', 'Git', 'NPM', 'Photoshop', 'WebDesign', 'Usability']
                },
                {
                    date: 'OCT 2013',
                    timelineSpot: 'left: 60%;',
                    name: 'BasisOnline',
                    logo: 'basisonline',
                    location: 'Veldhoven',
                    members: '10',
                    founded: '2002',
                    rank: 'Creative Front-end Developer',
                    active: 'October 2013 - July 2018',
                    description: 'BasisOnline is the specialist for all online communication within primary education, converting the wishes and needs of primary education into practical, contemporary and safe solutions. The BasisOnline Ouderportaal facilitates groundbreaking two-way school-parent communication, which does not only provide a better relationship with parents, but also a better coordination of the child\'s learning process!',
                    achievements: [
                        'Made sure our solutions stayed future-proof by introducing new techniques such as Bootstrap & SASS to the workflow',
                        'Served as a mentor to multiple junior developers',
                        'Remotely guided international colleagues and made sure their work met our code quality standards',
                        'Designed and developed hundreds of websites for schools',
                        'Helped develop the Ouderportaal app',
                        'Carried out QA testing for all major SchoolCMS releases',
                        'Provided customer support for our SchoolCMS'
                    ],
                    exp: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'SASS', 'Photoshop', 'Illustrator', 'WebDesign', 'Usability']
                },
                {
                    date: 'JUL 2013',
                    timelineSpot: 'left: 65%;',
                    name: 'Phoenix Designs',
                    logo: 'phoenix',
                    location: 'Nuenen',
                    members: '2',
                    founded: '2013',
                    rank: 'Founder & Chief Design Officer',
                    active: 'July 2013 - Present',
                    description: 'Phoenix Designs works with passion and drive to make user friendly, manageable websites. This is achieved by good design and advice, good ideas, solid technical applications and a focus on customer needs.',
                    achievements: [
                        'Created a custom CMS that enables users to easily manage their website whilst offering freedom in design and functionality',
                        'Guided multiple projects to a succesfull end from prospect to fully functioning website',
                        'Designed the corporate identity and company website',
                        'Created a CRM system for own use to manage client information and project management'
                        
                    ],
                    exp: ['HTML', 'CSS', 'Javascript', 'Vue', 'Bootstrap', 'SASS', 'Git', 'NPM', 'Photoshop', 'Illustrator', 'WebDesign', 'UIDesign', 'Illustration', 'Usability']
                },
                {
                    date: 'FEB 2013',
                    timelineSpot: 'left: 70%;',
                    name: 'Laméco',
                    logo: 'lameco',
                    location: 'Eindhoven',
                    members: '12',
                    founded: '2008',
                    rank: 'Web Design Intern',
                    active: 'February 2013 - July 2013',
                    description: 'The core business of Laméco is to make and keep organisations online successful by guiding them to new opportunities with knowledge, insight and a lot of love for their profession.',
                    achievements: [
                        'Wrote a thesis on user experience and user interface design',
                        'Held a customer survey to get insight into the cons and pros of the current CMS',
                        'Interviewed developers and users about current and possible functionalities',
                        'Held usability tests among new users',
                        'Designed a new, fully user-focussed CMS based on research findings',
                        'Helped with various design and development tasks'
                    ],
                    exp: ['HTML', 'CSS', 'Bootstrap', 'Photoshop', 'WebDesign', 'UIDesign', 'Usability']
                },
                {
                    date: '2011',
                    timelineSpot: 'right: 0; transform: translateX(50%);',
                    name: 'ISAAC',
                    logo: 'isaac',
                    location: 'Eindhoven',
                    members: '37',
                    founded: '1999',
                    rank: 'Front-end Intern',
                    active: 'August 2011 - February 2012',
                    description: 'ISAAC is absolutely crazy about internet and this is expressed by the passion with which they work on web and software solutions, specialising in commerce, finance, integration and innovation.',
                    achievements: [
                        'Helped with various web design and development projects',
                        'Did marketing research on developers to determine how to set up a crossmedia campaign',
                        'Designed and developed a landingspage for the campaign',
                        'Sketched storyboards for a viral video',
                        'Wrote a social media campaign plan'
                    ],
                    exp: ['HTML', 'CSS', 'Photoshop', 'WebDesign', 'Usability']
                }
            ]
        }
    },
    created() {
        this.guild = this.guilds[0];
    }
}
</script>