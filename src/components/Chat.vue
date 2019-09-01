<template>
    <section class="chat">
        <img src="/img/cave.png" class="img-fluid">
        <div class="container">
            <header>
                <h2>Chat</h2>
                <h1>Ready for action</h1>
                <h6>Hit me up if you have an interesting quest lined up or are a fellow adventurer in need of some co-op action</h6>
            </header>
            <div class="row">
                <div class="col-md-7 col-lg-6 offset-lg-1">
                    <form class="row" v-if="!messageSent">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formName">Name</label>
                                <input type="text" class="form-control" name="name" id="formName" placeholder="Name" v-model="name" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formEmail">Email address</label>
                                <input type="email" class="form-control" name="email" id="formEmail" placeholder="E-mail" v-model="mail" required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="formMessage">Message</label>
                                <textarea class="form-control" id="formMessage" name="message" placeholder="Message" v-model="message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-secondary" @click.prevent="sendMail">Send</button>
                        </div>
                    </form>
                    <div class="sent" v-else>
                        <div class="title">Message sent</div>
                        Thanks for your message, I'll get back to you as soon as possible!
                    </div>
                </div>
                <div class="col-md-4 offset-md-1"> 
                    <div class="contact-info-title d-md-none">Contact Info</div>
                    <div class="title">E-mail</div>
                    <div class="contact-info">lisannevdl@gmail.com</div>
                    <div class="title">Phone</div>
                    <div class="contact-info">+31 622651671</div>
                    <div class="title">Social</div>
                    <div class="contact-info">
                        <a href="https://github.com/lisannevdl" target="_blank" title="Github" class="social-icon"><img src="../assets/images/github.svg" class="img-fluid"></a>
                        <a href="https://www.linkedin.com/in/lisannevdl/" target="_blank" title="LinkedIn" class="social-icon"><img src="../assets/images/linkedin.svg" class="img-fluid"></a>
                    </div>
                </div>
            </div>
        </div>
        <img src="/img/floor.png" class="img-fluid">
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            mail: '',
            message: '',
            messageSent: false
        }
    },
    methods: {
        async sendMail() {
            const jsonData = { name: this.name, email: this.mail, message: this.message };
            const formattedJsonData = JSON.stringify(jsonData);

            const newXHR = new XMLHttpRequest();
            newXHR.open('POST', '/sendContact.php');
            await newXHR.send(formattedJsonData);
            this.messageSent = true;
        }
    }
}
</script>