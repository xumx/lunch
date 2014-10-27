<?php include 'inc/config.php'; ?>
<?php include 'inc/template_start.php'; ?>
<?php include 'inc/page_head.php'; ?>

<!-- Intro -->
<section class="site-section site-section-top site-section-light themed-background-dark">
    <div class="container">
        <h1 class="text-center animation-fadeInQuickInv"><strong>We are here if you need help.</strong></h1>
    </div>
</section>
<!-- END Intro -->

<!-- Google Map -->
<!-- Gmaps.js (initialized in js/pages/contact.js), for more examples you can check out http://hpneo.github.io/gmaps/examples.html -->
<div id="gmap" class="themed-background-muted" style="height: 300px;"></div>
<!-- END Google Map -->

<!-- Contact -->
<section class="site-content site-section">
    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 site-block">
                <form action="contact.php#form-contact" method="post" id="form-contact">
                    <div class="form-group">
                        <label for="contact-name">Name</label>
                        <input type="text" id="contact-name" name="contact-name" class="form-control input-lg" placeholder="Your full name..">
                    </div>
                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="text" id="contact-email" name="contact-email" class="form-control input-lg" placeholder="Your email address..">
                    </div>
                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="contact-message" rows="10" class="form-control input-lg" placeholder="How can we help?"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-lg btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- END Contact -->

<?php include 'inc/page_footer.php'; ?>
<?php include 'inc/template_scripts.php'; ?>

<!-- Google Maps API + Gmaps Plugin, must be loaded in the page you would like to use maps (Remove 'http:' if you have SSL) -->
<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script src="js/plugins/gmaps.min.js"></script>

<!-- Load and execute javascript code used only in this page -->
<script src="js/pages/contact.js"></script>
<script>$(function(){ Contact.init(); });</script>

<?php include 'inc/template_end.php'; ?>