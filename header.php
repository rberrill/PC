<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url'); ?>" />
    <!-- Framework CSS -->  
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/blueprint/screen.css" type="text/css" media="screen, projection" />  
        <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/blueprint/print.css" type="text/css" media="print" />  
        <!--[if IE]><link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/blueprint/css/ie.css" type="text/css" media="screen, projection" /><![endif]-->  
    <!-- End Framework CSS -->
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php if (current_user_can('manage_options')) { ?>
        <div id="devHelper">
            Template Loaded: <?php echo getTemplateName(); ?>
        </div>
    <?php } ?>
    <div id="siteWrapper">
        <header>
            <div id="header" class="container">
                <hgroup>
                    <h1>
                        <span>
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
                                <?php bloginfo( 'name' ); ?>
                            </a>
                        </span>
                    </h1>
                    <h2><?php bloginfo( 'description' ); ?></h2>
                </hgroup>
                <nav id="header">
                    <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary', // Setting up the location for the main-menu, Main Navigation.
                            'menu_class' => 'sf-menu', //Adding the class for dropdowns
                            'container_id' => 'navwrap', //Add CSS ID to the containter that wraps the menu.
                            'container_class' => 'menu-header',
                            'fallback_cb' => 'primaryMenu', //if wp_nav_menu is unavailable, WordPress displays wp_page_menu function, which displays the pages of your blog.
                                )
                        );
                    ?>
                </nav>
            </div>
        </header>
        