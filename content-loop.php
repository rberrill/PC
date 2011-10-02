<?php
while (have_posts()) {
    the_post();
    ?>
    <article>
        <h2>
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" rel="bookmark">
                <?php the_title(); ?>
            </a>
        </h2>
        <span class="theAuthor"><?php _e("Posted by"); ?>: <?php the_author_link(); ?></span>
        <span class="theDate"><?php _e("On: "); ?><?php echo get_the_date(); ?></span>
        <?php
        if (function_exists('has_post_thumbnail')) {
            if (has_post_thumbnail()) {
                $imageData = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full');
                ?>
                <a href="<? echo $imageData[0]; ?>" class="featuredImage">
                    <?php the_post_thumbnail('home-page-small'); ?>
                </a>
                <?php
            }
        }
        the_content();
        ?>
        <span class="theCategories"><?php _e("Posted in: "); ?><?php the_category(", "); ?></span>
        <?php the_tags('<span class="theTags">' . __('Tags: '), ', ', '</span>'); ?>
        <?php if (!is_single()) {
            ?>
            <span class="commentCount">
                <a href="<?php echo get_permalink(); ?>">
                    <?php comments_number(__('No Comments'), __('1 Comment'), __('% Comments')); ?>
                </a>
            </span>
            <?php
        } else {
            comments_template('', true);
        }
        ?>
    </article>
    <?php
}