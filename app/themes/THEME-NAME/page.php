<?php
/**
 * Page Template
 *
 */

get_header(); ?>

  <section class="main-body page" id="page">
    <div class="container">
      <div class="row">
        <?php while ( have_posts() ) : the_post(); ?>
          <?=the_content()?>
        <?endwhile?>
      </div>
    </div>
  </section>

<?get_footer()?>
