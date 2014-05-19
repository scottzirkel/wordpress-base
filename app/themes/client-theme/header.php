<?php
  global $template_directory;
  $template_directory = get_template_directory_uri();
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en-us" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en-us" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en-us" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en-us" class="no-js"> <!--<![endif]-->
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php
    /*
     * Print the <title> tag based on what is being viewed.
     */
    global $page, $paged;

    wp_title( '|', true, 'right' );

    // Add the blog name.
    bloginfo( 'name' );

    // Add the blog description for the home/front page.
    $site_description = get_bloginfo( 'description', 'display' );
    if ( $site_description && ( is_home() || is_front_page() ) )
        echo " | $site_description";

    ?></title>
    <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>">
    <link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>">
    <script src="<?=$GLOBALS['template_directory']?>/bower_components/modernizr/modernizr.js"></script>
    <script src="<?=$GLOBALS['template_directory']?>/bower_components/jquery/dist/jquery.min.js" type="text/javascript" charset="utf-8"></script>
    <?wp_head()?>
  </head>
  <body>
