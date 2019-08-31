<template>
    <pre class="codesnippet-block">{{ typedSnippet }}</pre>
</template>

<script>
import { clearTimeout } from 'timers';
export default {
    props: {
        snippet: String
    },
    data() {
        return {
            typedSnippet: '',
            cursorPosition: 0,
	        typeSpeed: 10,
            tempTypeSpeed: 0
        }
    },
    watch: {
        snippet() {
            this.resetCodeSnippet();
        }
    },
    mounted() {
        this.typeCodeSnippet();
    },
    methods: {
        resetCodeSnippet() {
            this.typedSnippet = '';
            this.cursorPosition = 0;
            this.tempTypeSpeed = 0;
            this.typeCodeSnippet();
        },
        typeCodeSnippet() {
            if (this.snippet[this.cursorPosition] === " ") {
                this.tempTypeSpeed = 0;
            } else {
                this.tempTypeSpeed = (Math.random() * this.typeSpeed) + 50;
            }

            this.typedSnippet += this.snippet[this.cursorPosition];

            this.cursorPosition += 1;
            
	        if (this.cursorPosition < this.snippet.length) {
	            setTimeout(this.typeCodeSnippet, this.tempTypeSpeed);
	        }
        }
    }
}
</script>