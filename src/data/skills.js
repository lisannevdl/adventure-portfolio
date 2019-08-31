export default {
    frontend: [[
        {
            name: 'HTML', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Builds a structure for a web page that can consist of text or images and includes hyperlinks that visitors can use to navigate.', 
            upgrades: [
                {
                    name: 'HTML5', 
                    type: 'Upgrade', 
                    earned: true, 
                    desc: 'Adds new syntactic features to natively handle multimedia and graphical content and enriches the semantic content of documents.'
                }
            ],
            script: `<html>
    <head>
        <title>HTML</title>
    </head>
    <body>
        <h1>Structure web page</h1>
    </body>
</html>`
        },
        {
            name: 'Javascript', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Adds behaviour to a web page making it dynamic and enabling the user to interact with it.', 
            upgrades: [
                {
                    name: 'ES6', 
                    type: 'Upgrade', 
                    earned: true, 
                    desc: 'Adds significant new syntax, including class declarations, promises, ES6 modules, arrow functions and template literals.'
                }
            ],
            script: `activateSkill(skill, level) {
    if (level > 5) {
        return \`You use \${skill.name}\`;
    } else {
        return \`You're level \${level}, 
                practise some more!\`;
    }
}`
        },
        {
            name: 'CSS', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Adds style to a web page which dictates how a page will look to visitors.', 
            upgrades: [
                {
                    name: 'CSS3', 
                    type: 'Upgrade', 
                    earned: true, 
                    desc: 'Adds new styling options like rounded corners, gradients, animations and transitions, as well as new layouts like flexbox and grid.'
                }
            ],
            script: `.css-skill {
    display: block;
    position: relative;
    font-size: 20px;
    font-weight: 300;
    color: #101e25;
    padding: 10px 0;
}`
        },
        {
            name: 'Git', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants knowledge on version-control to track changes in source code during development and increases work coordinating with colleagues.', 
            script: `cd /skills
git init
git add gitSkill.js
git commit -m "Add Git Skill"
git remote add origin 
    https://github.com/Lisanne/skills.git
git remote -v
git push`
        },
        ],[
            {
                name: 'Bootstrap', 
                type: 'Active skill', 
                earned: true, 
                desc: 'Builds a responsive, mobile-first web page using CSS-based design templates for interface components like typography, forms, buttons and navigation.', 
                script: `<div class="container">
    <h1>Bootstrap grid</h1>
    <div class="row">
        <div class="col></div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-2"></div>
    </div>
</div>`
            },
            {
                name: 'SASS', 
                type: 'Active skill', 
                earned: true, 
                desc: 'Extends CSS by adding features like variables, nesting, mixins, and selector inheritance.', 
                script: `.skill {
    @include box-shadow($skill-bg-color);

    &.scss-skill {
        color: rgba($skill-color, 0.88); 
        height: $skill-height;
    }
}`
            },
            {
                name: 'NPM', 
                type: 'Passive skill', 
                earned: true, 
                desc: 'Grants knowledge on how to use package managers to manage dependencies of a project and keep everything secure and up-to-date.', 
                script: `$ npm --version
$ npm install
$ npm outdated
$ npm uninstall oldskill
$ npm install npmskill --save-dev
$ npm update
$ npm prune
$ npm run serve`
            },
        ],[
            {
                name: 'Vue', 
                type: 'Active skill', 
                earned: true, 
                desc: 'Builds a single-page application using an HTML-based template syntax that binds the rendered DOM to the underlying Vue instance data, featuring a reactivity system for optimised re-rendering.', 
                upgrades: [
                    {
                        name: 'Vuex', 
                        type: 'Add-on', 
                        earned: true, 
                        desc: 'Adds state management which serves as a centralised store, keeping application data in a transparent and predictable state even when that data is being shared across multiple components.'
                    }
                ],
                script: `<template>
    <section v-for="skill in skillTree"
        :class="skill.earned">
        <h1>{{ skill.name }}</h1>
        <skill-icon :icon="skill.icon">
        </skill-icon>
    </section>
</template>`
            },
            {
                name: 'AngularJS', 
                type: 'Active skill', 
                earned: true, 
                desc: 'Builds a single-page application with HTML pages that have custom attributes embedded into them that are interpreted as directives to bind parts of the page to a model  with standard Javascript variables.', 
                upgrades: [
                    {
                        name: 'Angular2', 
                        type: 'Active skill', 
                        earned: false, 
                        exp: 0,
                        totalExp: 1000,
                        desc: 'Builds client applications in HTML and TypeScript using NgModules as building blocks. Cannot be used in combination with the previous AngularJS skill.'
                    }
                ],
                script: `<div *ngFor="let skill of skills">
    <h3>{{ skill.name }}</h3>
    <div *ngIf="player.level > 5">
        <button (click)="activateSkill()">
            Activate Skill
        </button>
    </div>
</div>`
            },
            {
                name: 'React', 
                type: 'Active skill', 
                earned: false, 
                exp: 440,
                totalExp: 1000,
                desc: 'Builds a component-based single-page application using JSX and Javascript, implementing a one-way reactive data flow, which offers a simpler programming model, better performance and reduces the boilerplate.', 
                upgrades: [
                    {
                        name: 'Redux', 
                        type: 'Add-on', 
                        earned: false, 
                        exp: 600,
                        totalExp: 800,
                        desc: 'Adds a predictable container for application state, operating in a similar fashion to a reducing function.'
                    }
                ],
                script: `class Skill extends React.Component {
    render() {
        return (
            Name: {this.props.name}
            Level: {this.props.level}
        );
    }
}`
            },
            {
                name: 'Testing', 
                type: 'Passive skill', 
                earned: false, 
                exp: 200,
                totalExp: 1000,
                desc: 'Grants knowledge on testing processes including unit testing, integration testing and end-to-end testing.', 
                script: `const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)`
            },
        ]
    ],
    design: [[
        {
            name: 'Photoshop', 
            type: 'Mastery skill', 
            earned: true, 
            desc: 'Grants Photoshop proficiency so the tool can be used for web and interface design.'
        },
        {
            name: 'Illustrator', 
            type: 'Mastery skill', 
            earned: true, 
            desc: 'Grants Illustrator proficiency so the tool can be used to create vector graphics.'
        },
        {
            name: 'Design Sense', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants knowledge on the elements of design as well as basic design principles to create aesthetically pleasing visual elements.'
        },
    ],
    [
        {
            name: 'Web Design', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Creates the graphic design for a website based on the target audience and the purpose of the website while making sure it\'s visually appealing and easy to use.',
            upgrades: [
                {
                    name: 'Responsive Design', 
                    type: 'Upgrade', 
                    earned: true, 
                    desc: 'Enhances the graphic design ensuring content is displayed well on a variety of devices and window or screen sizes while maintaining good usability.'
                }
            ],
        },   
        {
            name: 'UI Design', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Designs an application user interface focussed on making the users\'s interaction as simple and efficient as possible.'
        },   
        {
            name: 'Illustration', 
            type: 'Active skill', 
            earned: true, 
            desc: 'Creates a resolution-independent vector image comprised of values rather than pixels, that convey color using scalable color polygons, providing perfect lines and crisp colors.'
        },   
        {
            name: 'Creativity', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants the ability to understand a project\'s purpose and standards, acknowledge client\'s expectactions and come up with constructive and out-of-the-box optimisation ideas.'
        },   
    ],
    [
        {
            name: 'SEO', 
            type: 'Passive skill', 
            earned: false, 
            exp: 800,
            totalExp: 1000,
            desc: 'Grants knowledge on how to make a webpage attractive to search engines.'
        },
        {
            name: 'Usability', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants knowledge on how to enhance user satisfaction with a design by improving the usability, accessibility, and desirability provided in the interaction with the design by applying common design patterns.'
        },      
        {
            name: 'Typography', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants knowledge on fonts, line-height and spacing and the ability to choose and combine fitting, legible, well-designed types.'
        },   
        {
            name: 'Color Theory', 
            type: 'Passive skill', 
            earned: true, 
            desc: 'Grants knowledge on how to create color palettes that convey the right emotions.'
        },   
    ]
    ]
}