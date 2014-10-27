<?php
/**
 * page_head.php
 *
 * Author: pixelcave
 *
 * Header of each page
 *
 */
?>

<!-- Page Container -->
<div id="page-container">
    <!-- Site Header -->
    <header>
        <div class="container">
            <!-- Site Logo -->
            <a href="index.php" class="site-logo">
                <i class="fa fa-cube"></i> App<strong>UI</strong>
            </a>
            <!-- END Site Logo -->

            <!-- Site Navigation -->
            <nav>
                <!-- Menu Toggle -->
                <!-- Toggles menu on small screens -->
                <a href="javascript:void(0)" class="btn btn-default site-menu-toggle visible-xs visible-sm">
                    Menu
                </a>
                <!-- END Menu Toggle -->

                <!-- Main Menu -->
                <?php if ($primary_nav) { ?>
                <ul class="site-nav">
                    <?php foreach( $primary_nav as $key => $link ) {
                        // Get link's vital info
                        $url    = (isset($link['url']) && $link['url']) ? $link['url'] : 'javascript:void(0)';
                        $active = (isset($link['url']) && ($template['active_page'] == $link['url'])) ? 'active' : '';
                    ?>
                    <li<?php if ($active) { echo ' class="'. $active .'"'; } ?>>
                        <a href="<?php echo $url; ?>"<?php if (isset($link['class']) && $link['class']) { echo ' class="'. $link['class'] .'"'; } ?>><?php echo $link['name']; ?></a>
                    </li>
                    <?php } ?>
                </ul>
                <?php } ?>
                <!-- END Main Menu -->
            </nav>
            <!-- END Site Navigation -->
        </div>
    </header>
    <!-- END Site Header -->
