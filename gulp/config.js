var src           = 'dev',
    build         = 'public/themes/THEME_NAME',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    buildAssets   = build + '/assets';

module.exports = {
  images: {
    src: src + '/images/**/*.{jpg,jpeg,gif,png}',
    dest: buildAssets + '/img'
  },
  javascript: {
    src: src + '/js/**/*.js',
    dest: buildAssets + '/js'
  },
  optimize: {
    css: {
      src: buildAssets + '/css/*.css',
      dest: buildAssets + '/css'
    },
    img: {
      src: buildAssets + '/img/*.{jpg,jpeg,gif,png}',
      dest: buildAssets + '/img',
      imgMin: {
        progressive: true
      }
    },
    js: {
      src: [buildAssets + '/js/*.js', !buildAssets + '/js/app.js', !buildAssets + '/js/*.min.js'],
      dest: buildAssets + '/js'
    }
  },
  otherAssets: {
    src: src + '/pdf/*.pdf',
    dest: buildAssets + '/pdf'
  },
  sass: {
    src: src + '/sass/core.scss',
    dest: buildAssets + '/css',
  },
  sassdoc: {
    src: src + '/sass',
    dest: build + '/docs',
    options: {
      verbose: true
    }
  },
  scsslint: {
    src: src + '/sass/*.scss',
    options: {
      'config': '/scsslint.yaml'
    }
  },
  watch: {
    images: src + '/images/**/*.{jpg,jpeg,gif,png}',
    sass: src + '/sass/**/*.{sass,scss}',
    js: src + '/js/**/*.js'
  }
};
