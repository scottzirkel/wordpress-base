<?get_header()?>

  <section class="main-body page" id="page">
    <?php while ( have_posts() ) : the_post(); ?>
      <div class="container">
        <div class="row">
          <h2><?=the_title()?></h2>
          <h4><?=the_date()?></h4>
          <p><?=the_content()?></p>
        </div>
      </div>
    <?endwhile?>
  </section>

<?get_footer()?>
