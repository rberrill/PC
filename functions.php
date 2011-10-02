<?php

/************************************************************
 * Helper function when setting up the site to see what 
 * template is actually being loaded
 */

function getTemplateName () {
    foreach ( debug_backtrace() as $called_file ) {
	foreach ( $called_file as $index ) {
            if ( !is_array($index[0]) AND strstr($index[0],'/themes/') AND !strstr($index[0],'footer.php') ) {
                $template_file = $index[0] ;
            }
	}
    }
    $template_contents = file_get_contents($template_file) ;
    preg_match_all("(Template Name:(.*)\n)siU",$template_contents,$template_name);
    $template_name = trim($template_name[1][0]);
    if ( !$template_name ) { $template_name = '(default)' ; }
    $template_file = array_pop(explode('/themes/', basename($template_file)));
  return $template_file . ' > '. $template_name ;
}

if (function_exists("add_theme_support")) {
    add_theme_support('post-thumbnails');
    add_image_size('home-page-large', 300, 300, true);
    add_image_size('home-page-small', 100, 100, true);
}

register_nav_menu('primary','Primary Menu');

function primaryMenu() {
    echo '<div id="navwrap" class="menu-header"><ul id="menu-primary" class="sf-menu">';
    echo wp_list_pages(array(
                            'depth' => 0,
                            'echo' => false,
                            'sort_column'  => 'menu_order',
                            'title_li' => null,
                        ));
    echo '</ul></div>';
}

function addOurScripts() {
    if (!is_admin()) { // Add the scripts, but not to the wp-admin section.
        // Adjust the below path to where scripts dir is, if you must.
        $scriptdir = get_stylesheet_directory_uri()."/js/";

        // Remove the wordpresss inbuilt jQuery.
        wp_deregister_script('jquery');

        // Lets use the one from Google AJAX API instead.
        wp_register_script( 'jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js', false, '1.6.2');

        wp_register_script( 'superfish', $scriptdir.'sf/js/superfish.js', false, '1.4.8');
        wp_register_script( 'sf_load', $scriptdir.'sf_load.js', false, '1.0.0');

        //load the scripts and style.
        wp_enqueue_script('jquery');

        wp_enqueue_script('superfish');
        wp_enqueue_script('sf_load');
    } // end the !is_admin function
} //end add_our_scripts function

add_action( 'wp_head', 'addOurScripts',0);