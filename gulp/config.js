var src           = 'app',
    build         = 'build',
    dependencies  = src + '/_components',
    assets        = src + '/assets',
    buildAssets   = build + '/assets';

module.exports = {
  bower: {
    css: {
      src: [dependencies + '/**/css/*.css', dependencies + '/**/dist/*.css', dependencies + '/**/*.css'],
      dest: buildAssets + '/css'
    },
    js: {
      src: [dependencies + '/dist/**.min.js', dependencies + '/**/*.js', !dependencies + '/src/*.js'],
      dest: buildAssets + '/js'
    }
  },
  browsersync: {
    server: {
      baseDir: [build]
    },
    port: 9996,
    files: [
      buildAssets + '/css/*.css',
      buildAssets + '/js/.js',
      buildAssets + '/img/**.{jpg,jpeg,gif,png}'
    ]
  },
  clean: {
    src: build,
    options: {
      force: true
    }
  },
  compass: {
    src: src + '/sass/core.scss',
    dest: buildAssets + '/css',
    require: ['susy'],
    autoprefixer: "'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'",
  },
  html: {
    src: [src + '/html/**/*.html', !src + '/html/templates/*'],
    dest: build
  },
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
  staging: {
    src: buildAssets,
    css: buildAssets + '/css',
    js: buildAssets + '/js',
    ftp: {
      conn: {
        host: '70.32.76.228',
        user: 'tagnetdev',
        password: 'TagNetDev2014!',
        parallel: 10
      },
      globs: [
        build
      ]
    },
    rsync: {
      src: build + '/**',
      root: build,
      hostname: '70.32.76.228',
      username: 'tagnetdev',
      destination: '/var/www/vhosts/alaradevelopment.com/goetx.alaradevelopment.test',
      options: {
        verbose: true,
        progress: true
      }
    }
  },
  watch: {
    images: src + '/images/**/*.{jpg,jpeg,gif,png}',
    html: src + '/html/**/*.html',
    sass: src + '/sass/**/*.{sass,scss}',
    js: src + '/js/**/*.js'
  }
};
