<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url'); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php if (current_user_can('manage_options')) { ?>
        <div id="devHelper">
            Template Loaded: <?php echo getTemplateName(); ?>
        </div>
    <?php } ?>
    
    <!-- Start Page Container -->
    <div id="container_wrap">

        <!-- Start Header -->
        <div id="header">

            <!-- Start Logo -->
            <div class="logo">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.png" alt="" />
            </div>
            <!-- End Logo -->

            <!-- Start Navigation -->
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary', // Setting up the location for the main-menu, Main Navigation.
                'menu_id' => 'nav', //Adding the class for dropdowns
                'container' => false,
                'fallback_cb' => 'primaryMenu', //if wp_nav_menu is unavailable, WordPress displays wp_page_menu function, which displays the pages of your blog.
                    )
            );
            ?>
            <!-- End Navigation -->

        </div>
        <!-- End Header -->        