<?php get_header(); ?>

<div class="container mx-auto px-6 py-20">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article class="mb-12 prose prose-invert lg:prose-xl">
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
        </article>
    <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
