<?php get_header(); ?>
<!-- Start Page Content -->
<div class="main_content">
    <div class="page_heading">				
        <h1><?php the_title(); ?></h1>
    </div>

    <div class="full">
        <?php get_template_part("content", "page"); ?>
    </div>
</div>
<!-- End Page Content -->
<?php get_footer(); ?>