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
            <ul id="nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="our_story.html">Our Story</a></li>
                <li>
                    <a href="menu.html">Menu</a>
                    <ul>
                        <li><a href="menu.html">Menu Variation 1</a></li>
                        <li><a href="menu_2.html">Menu Variation 2</a></li>
                        <li><a href="menu_3.html">Menu Variation 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="gallery.html">Galleries</a>
                    <ul>
                        <li><a href="gallery.html">Gallery Variation 1</a></li>
                        <li><a href="gallery_2.html">Gallery Variation 2</a></li>
                        <li><a href="gallery_3.html">Gallery Variation 3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                    <ul>
                        <li><a href="blog_item.html">Blog Item</a></li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                    <ul>
                        <li><a href="hours_locations.html">Hours &amp; Locations</a></li>
                    </ul>
                </li>
                <li class="active">
                    <a href="#">HTML Styles</a>
                    <ul>
                        <li><a href="buttons.html">Buttons</a></li>
                        <li><a href="columns.html">Columns</a></li>
                        <li><a href="boxes.html">Styled Boxes</a></li>
                        <li><a href="tables.html">Tables</a></li>
                        <li><a href="tabs_toggles.html">Tabs / Toggles</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="full_width.html">Full Width</a></li>
                        <li><a href="sidebar_large.html">Sidebar (large)</a></li>
                        <li><a href="sidebar_small.html">Sidebar (small)</a></li>
                        <li><a href="404.html">404</a></li>
                    </ul>
                </li>
            </ul>	
            <!-- End Navigation -->

        </div>
        <!-- End Header -->        