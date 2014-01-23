<?php
// ===================================================
// Load database info and local development parameters
// ===================================================

$envs = array(
  'development' => 'http://app.dev/',
  'staging'     => 'http://app.staging.com',
  'production'  => 'http://app.com'
);
define('ENVIRONMENTS', serialize($envs));

define('WP_ENV', 'development');

switch(WP_ENV) {
    case 'development':
        define( 'DB_NAME', '' );
        define( 'DB_USER', '' );
        define( 'DB_PASSWORD', '' );
        define( 'DB_HOST', 'localhost' );
    break;
    case 'staging':
        define( 'WP_LOCAL_DEV', false );
        define( 'DB_NAME', '' );
        define( 'DB_USER', '' );
        define( 'DB_PASSWORD', '' );
        define( 'DB_HOST', 'localhost' );
    break;
    case 'production':
        define( 'WP_LOCAL_DEV', false );
        define( 'DB_NAME', '' );
        define( 'DB_USER', '' );
        define( 'DB_PASSWORD', '' );
        define( 'DB_HOST', 'localhost' );
    break;
}

// ========================
// Custom Content Directory
// ========================
define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] );
define('CONTENT_DIR', '/app');
define('WP_CONTENT_DIR', dirname(__FILE__) . CONTENT_DIR);
define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . CONTENT_DIR);
define('UPLOADS', '../media/uploads');

// ================================================
// You almost certainly do not want to change these
// ================================================
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&_]1l[-uNKLv;?RO]bicK(@RLM7h;:$}GilC.8m~=.NJu 2Oe^IzHW[WI <i1`&&');
define('SECURE_AUTH_KEY',  '+O+t~4C[L5n4SI(J+02]rbsL,hLn]J$4qZ1Keh du5x~?b-kX281D~`:f(Pl-*[a');
define('LOGGED_IN_KEY',    '.++d2?P>@D83gEy;|Fyf-;J{N-eZLJ`MZ<Y> gNmzbq+&NF2xlS/evrA_3|N%|jL');
define('NONCE_KEY',        '%Q/P{s}*;66?#f%W)GD}>]B=iHNT~9^T2bI>+OOu~&)19vm_54x6_>S0KS)/(D;B');
define('AUTH_SALT',        '#FfN3a}pTj4eUY%s48YS7zalbig `B6<vRrP++P W)Y]&SAg~jj)Vk>Z9pTnY{V$');
define('SECURE_AUTH_SALT', '(5n+J@LwX^|{r=]<U|B+>pb+4BdaBz:L|-J/!aY>(M[i(E#n,umD+YYD4g}S@CY=');
define('LOGGED_IN_SALT',   ';v9l&ND(}Cu>&h5{-@6=TEA+[1]:Q|-#W(xjPbYnInZ+35@Vi0**<UyF;fwMT?R ');
define('NONCE_SALT',       'R3D`a}<x+#E`Y:CYeUbfQ*B#bAl-TGCb7s 3YMliDD[7Vyfm-$=hIMD3T_LSXxi ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/wp/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
