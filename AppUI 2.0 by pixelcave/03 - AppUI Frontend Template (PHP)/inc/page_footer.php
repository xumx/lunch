<?php
/**
 * page_footer.php
 *
 * Author: pixelcave
 *
 * The footer of each page
 *
 */
?>
    <!-- Footer -->
    <footer class="site-footer site-section site-section-light">
        <div class="container">
            <!-- Footer Links -->
            <div class="row">
                <div class="col-sm-4">
                    <h4 class="footer-heading">Company</h4>
                    <ul class="footer-nav ul-breath list-unstyled">
                        <li><a href="javascript:void(0)">About Us</a></li>
                        <li><a href="javascript:void(0)">Our Team</a></li>
                        <li><a href="javascript:void(0)">Memberships</a></li>
                        <li><a href="javascript:void(0)">Terms &amp; Conditions</a></li>
                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <h4 class="footer-heading">Need support?</h4>
                    <ul class="footer-nav footer-nav-links list-inline">
                        <li><a href="javascript:void(0)"><i class="fa fa-fw fa-book"></i> Knowledge Base</a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-fw fa-support"></i> FAQ</a></li>
                    </ul>
                    <h4 class="footer-heading">We are social!</h4>
                    <ul class="footer-nav footer-nav-links list-inline">
                        <li><a href="javascript:void(0)" class="social-facebook" data-toggle="tooltip" title="Like our Facebook page"><i class="fa fa-fw fa-facebook"></i></a></li>
                        <li><a href="javascript:void(0)" class="social-twitter" data-toggle="tooltip" title="Follow us on Twitter"><i class="fa fa-fw fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0)" class="social-google-plus" data-toggle="tooltip" title="Like our Google+ page"><i class="fa fa-fw fa-google-plus"></i></a></li>
                        <li><a href="javascript:void(0)" class="social-dribbble" data-toggle="tooltip" title="Follow us on Dribbble"><i class="fa fa-fw fa-dribbble"></i></a></li>
                        <li><a href="javascript:void(0)" class="social-youtube" data-toggle="tooltip" title="Subscribe to our Youtube channel"><i class="fa fa-fw fa-youtube-play"></i></a></li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <h4 class="footer-heading">Newsletter</h4>
                    <form action="index.php" method="post" class="form-inline" onsubmit="return false;">
                        <div class="form-group">
                            <label class="sr-only" for="register-email">Your Email</label>
                            <div class="input-group">
                                <input type="email" id="register-email" name="register-email" class="form-control" placeholder="Your Email..">
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-primary">Subscribe</button>
                                </span>
                            </div>
                        </div>
                    </form>
                    <h4 class="footer-heading"><a href="http://goo.gl/RcsdAh"><?php echo $template['name']; ?></a></h4>
                    <em><span id="year-copy"></span></em> &copy; Crafted with <i class="fa fa-heart text-danger"></i> by <a href="http://goo.gl/WCS84b">pixelcave</a>
                </div>
            </div>
            <!-- END Footer Links -->
        </div>
    </footer>
    <!-- END Footer -->
</div>
<!-- END Page Container -->

<!-- Scroll to top link, initialized in js/app.js - scrollToTop() -->
<a href="#" id="to-top"><i class="fa fa-arrow-up"></i></a>
