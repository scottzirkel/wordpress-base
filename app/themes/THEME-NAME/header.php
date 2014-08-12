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
  <link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta charset="utf-8">
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
  <!-- <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>/css/normalize.css"> -->
  <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>/bower_components/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>/css/gravityform.css">
  <link rel="stylesheet" href="<?=$GLOBALS['template_directory']?>/css/core.css">
  <script src="<?=$GLOBALS['template_directory']?>/bower_components/modernizr/modernizr.js"></script>
  <script src="<?=$GLOBALS['template_directory']?>/bower_components/jquery/dist/jquery.min.js" charset="utf-8"></script>

  <?wp_head()?>
</head>
  <body>
  <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
