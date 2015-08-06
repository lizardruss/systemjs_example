module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 4000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};