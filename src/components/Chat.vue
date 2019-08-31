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
                    <form class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formName">Name</label>
                                <input type="text" class="form-control" id="formName" placeholder="Name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="formEmail">Email address</label>
                                <input type="email" class="form-control" id="formEmail" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="formMessage">Message</label>
                                <textarea class="form-control" id="formMessage" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-secondary">Send</button>
                        </div>
                    </form>
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