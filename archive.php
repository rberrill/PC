<?php get_header(); ?>
<div id="contentWrapper" class="container">
    <div id="primaryContent">
        <h1>
            <?php
            global $wp_query;
            //print_r($wp_query);
            if (is_author()) {
                echo __('Author: ') . $wp_query->nickname;
            } else if (is_day()) {
                echo __('Daily Archive: ') . get_the_date();
            } else if (is_month()) {
                echo __('Monthly Archive: ') . get_the_date("F Y");
            } else if (is_year()) {
                echo __('Yearly Archive: ') . get_the_date("Y");
            } else if (is_category()) {
                echo __('Category: ') . ucwords($wp_query->query_vars['category_name']);
            } else if (is_tag()) {
                echo __('Tag: ') . ucwords($wp_query->queried_object->name);
            } else {
                echo __('Archive: ') . ucwords($wp_query->queried_object->name);
            }
            ?>
        </h1>
        <?php
        if (have_posts()) {
            get_template_part("content", "loop");
        } else {
            get_template_part("content", "search");
        }
        ?>
    </div>
    <!-- End div primaryContent -->
    <aside>
        <?php get_sidebar(); ?>
    </aside>
</div>
<!-- End div contentWrapper -->
<?php get_footer(); ?>