<?php
  // Changes Admin Panel WordPress logo
  function admin_logo() {
    ?>
        <style type="text/css">
            #wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
                content: url(<?php echo get_stylesheet_directory_uri(); ?>/images/alara-logo.jpg)   !important;
                top: 2px;
            }

            #wpadminbar #wp-admin-bar-wp-logo > a.ab-item {
                pointer-events: none;
                cursor: default;
            }
        </style>
<?php
  }
  add_action('wp_before_admin_bar_render', 'admin_logo', 0);

  // Changes admin panel footer text
  function remove_footer_admin() {
    echo 'Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Designed by <a href="http://www.thealaragroup.net" target="_blank">The Alara Group</a></p>';
  }
  add_filter('admin_footer_text', 'remove_footer_admin');
?>
